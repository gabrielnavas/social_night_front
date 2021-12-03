import { useState } from 'react'
import { toast } from 'react-toastify'
import useApi from '../../shared/hooks/api/useApi'

const useRequestCancelRequestFriend = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()

  const handleRequestCancelRequestFriend = async (token: string, myUserId: number, userPossibleFriendId: number): Promise<void> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlCancelSendRequestFriend(myUserId, userPossibleFriendId), {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    setIsLoading(false)
    if (response.status === 204) {
      toast('Solicitação cancelada!')
    }
  }

  return {
    isLoading,
    handleRequestCancelRequestFriend
  }
}

export { useRequestCancelRequestFriend }
