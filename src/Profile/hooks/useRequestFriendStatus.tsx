import { useState } from 'react'
import useApi from '../../shared/hooks/api/useApi'

export type Status = 'Unknow'| 'Waiting' | 'Friend'
export type FriendStatus = {
  requesterUserId?: number,
  targetUserId?: number,
  status: Status
}

const useRequestFriendStatus = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()

  const handleRequestFriendStatus = async (token: string, myUserId: number, userPossibleFriendId: number): Promise<FriendStatus> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlFriendStatus(myUserId, userPossibleFriendId), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    setIsLoading(false)
    if (response.status === 200) {
      const json = await response.json()
      const status = json as FriendStatus
      return status
    }
    return {
      status: 'Unknow'
    }
  }

  return {
    isLoading,
    handleRequestFriendStatus
  }
}

export { useRequestFriendStatus }
