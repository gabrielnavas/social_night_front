import { useState } from 'react'
import useApi from '../../shared/hooks/api/useApi'

export type Friend = {
  userId: number
  username: string
  sendedAt: Date,
}

const useGetAllRequesters = () => {
  const [isLoading, setIsLoading] = useState(false)
  const api = useApi()

  const handleGetAllRequesters = async (token: string, requesterUserId: number): Promise<Friend[]> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlGetAllRequestsFriend(requesterUserId), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    setIsLoading(false)
    const status = response.status
    if (status === 200) {
      const friends = await response.json()
      return friends as Friend[]
    }
    return []
  }
  return {
    isLoading,
    handleGetAllRequesters
  }
}

export { useGetAllRequesters }
