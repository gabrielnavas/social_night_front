import { useState, useCallback } from 'react'

import useApi from '../../shared/hooks/api/useApi'

export type Friend = {
  userId: number
  username: string
  createdAt: Date,
  image?: string
}

const useGetFriends = () => {
  const [isLoading, setIsLoading] = useState(false)
  const api = useApi()

  const handleRequestGetFriends = useCallback(async (token: string, userID: number): Promise<Friend[]> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlGetFriends(userID), {
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
      return friends
    }
    return []
  }, [])

  return {
    handleRequestGetFriends,
    isLoading
  }
}

export default useGetFriends
