import { useState } from 'react'
import { toast } from 'react-toastify'
import useApi from '../../shared/hooks/api/useApi'

const useRequestSendRequestFriend = () => {
  const [isLoading, setIsLoading] = useState(false)
  const api = useApi()

  const handlSendRequestFriend = async (token: string, requesterUserId: number, targetUserId: number): Promise<void> => {
    setIsLoading(true)
    console.log(token, requesterUserId, targetUserId)
    const response = await fetch(api.getUrlSendRequestFriend(), {
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

    const status = response.status
    if (status === 200) {
      toast('Solicitação enviada.')
      return
    }
    toast('Solicitação falhou, tente novamente mais tarde.')
  }

  return {
    isLoading,
    handlSendRequestFriend
  }
}

export { useRequestSendRequestFriend }
