import { useState } from 'react'
import { toast } from 'react-toastify'
import useApi from '../../shared/hooks/api/useApi'

const useRequestAcceptRequestFriend = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()

  const handleRequestAcceptRequestFriend = async (token: string, requesterUserId: number, targetUserId: number): Promise<void> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlAcceptRequestFriend(), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        requesterUserId: requesterUserId,
        targetUserId: targetUserId
      })
    })
    setIsLoading(false)
    if (response.status === 200) {
      toast('São amigos agora!')
    }
  }

  return {
    isLoading,
    handleRequestAcceptRequestFriend
  }
}

export { useRequestAcceptRequestFriend }
