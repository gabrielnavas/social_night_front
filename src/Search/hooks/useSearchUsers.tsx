import { useState } from 'react'
import { toast } from 'react-toastify'

import useApi from '../../shared/hooks/api/useApi'
import useUserData from '../../shared/hooks/authenticationUser/useUserData'

export type User = {
  id: string,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string
  bio: string
  image?: string
}

const useSearchUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const userData = useUserData()
  const api = useApi()

  const handleSubmit = (query: string) => {
    (async () => {
      setIsLoading(true)
      const token = userData.handleGetUserData()?.token
      const users = await handleFetchUsers(token as string, query)
      setUsers(users)
      if (users.length === 0) {
        toast('Nenhum usuário encontrado.')
      }
      setIsLoading(false)
    })()
  }

  const handleFetchUsers = async (token: string, query: string) => {
    const response = await fetch(api.getUrlGetAllUsers(query), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const status = response.status
    if (status === 200) {
      const users = await response.json()
      return users
    }
    return []
  }

  return {
    users,
    isLoading,
    handleSubmit
  }
}

export { useSearchUsers }
