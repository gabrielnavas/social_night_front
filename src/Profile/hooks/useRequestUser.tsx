import { useState } from 'react'

import useApi from '../../shared/hooks/api/useApi'

export type User = {
  id: number,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string
  bio: string
  image?: string
}

const useRequestUser = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()

  const handleRequestUser = async (token: string, username: string): Promise<User | null> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlGetUserByUsername(username), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    setIsLoading(false)
    const status = response.status
    if (status === 200) {
      const user = await response.json()
      return user
    }
    return null
  }

  return {
    isLoading,
    handleRequestUser
  }
}

export { useRequestUser }
