import { useState } from 'react'
import { toast } from 'react-toastify'
import useApi from '../../shared/hooks/api/useApi'

const useRequestRemoveFriendship = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()

  const handleRequestRemoveFriendship = async (token: string, myUserId: number, userPossibleFriendId: number): Promise<void> => {
    setIsLoading(true)
    const response = await fetch(api.getUrlRemoveFriendship(myUserId, userPossibleFriendId), {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    setIsLoading(false)
    if (response.status === 204) {
      toast('Amizade cancelada!')
    }
  }

  return {
    isLoading,
    handleRequestRemoveFriendship
  }
}

export { useRequestRemoveFriendship }
