import { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'

import useUserData from '../../shared/hooks/authenticationUser/useUserData'
import useApi from '../../shared/hooks/api/useApi'
import router from 'next/router'
import usePage from '../../shared/hooks/pages/usePage'

type Friend = {
  userId: number
  username: number
  createdAt: Date,
  image?: string
}

const useGetFriends = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [friends, setFriends] = useState([] as Friend[])

  const api = useApi()
  const userData = useUserData()
  const page = usePage()

  useEffect(() => {
    (async () => {
      await handleGetFriends()
    })()
  }, [])

  const handleGetFriends = async () => {
    const user = userData.handleGetUserData()
    if (!user) {
      router.replace(page.getUrlLoginPage())
      return
    }
    setIsLoading(true)
    try {
      const friends = await requestRegister(user.token, user.user.id)
      setFriends(friends)
    } catch (ex) {
      console.log(ex)
      toast('Servidor offline. Tente novamente mais tarde.')
    }
    setIsLoading(false)
  }

  const requestRegister = useCallback(async (token: string, userID: number): Promise<Friend[]> => {
    const response = await fetch(api.getUrlGetFriends(userID), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const status = response.status
    if (status === 200) {
      const friends = await response.json()
      return friends
    }
    return []
  }, [])

  return {
    friends,
    isLoading
  }
}

export default useGetFriends
