import { useState } from 'react'
import useApi from '../../shared/hooks/api/useApi'

const useRequestIsFriend = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()

  const handleRequestIsMyFriend = async (token: string, myUserId: number, userPossibleFriendId: number): Promise<boolean> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlIsFriend(myUserId, userPossibleFriendId), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    setIsLoading(false)
    if (response.status === 200) {
      const json = await response.json()
      return json.isFriend
    }
    throw new Error('server error')
  }

  return {
    isLoading,
    handleRequestIsMyFriend
  }
}

export { useRequestIsFriend }
