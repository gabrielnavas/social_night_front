const apiUrl = process.env.APU_URL || 'http://localhost:3333'

const useApi = () => {
  return {
    getUrlRegister: () => `${apiUrl}/users`,
    getUrlAuthentication: () => `${apiUrl}/login`,
    getUrlGetFriends: (requesterUserId: number) => `${apiUrl}/friends/${requesterUserId}`,
    getUrlGetAllUsers: (query: string) => `${apiUrl}/users?username=${query}`
  }
}

export default useApi
