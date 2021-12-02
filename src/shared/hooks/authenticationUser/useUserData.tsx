import { parseCookies, setCookie, destroyCookie } from 'nookies'

export type UserData = {
  user: {
    id: number
    username: string
    email: string
    createdAt: string
    updatedAt: string
  }
  token: string
}

const USER_DATA_NAME = 'USER_DATA'

const useUserData = () => {
  const handleSetUserData = (userData: UserData) => {
    const payload = JSON.stringify(userData)
    setCookie(null, USER_DATA_NAME, payload, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })
  }

  const handleGetUserData = (): UserData | null => {
    const cookies = parseCookies(null)
    if (cookies[USER_DATA_NAME]) {
      const data = cookies[USER_DATA_NAME]
      return JSON.parse(data)
    }
    return null
  }

  const handleRemoveUserData = () => {
    destroyCookie(null, USER_DATA_NAME)
  }

  return {
    handleSetUserData,
    handleGetUserData,
    handleRemoveUserData
  }
}

export default useUserData
