const apiUrl = process.env.APU_URL || 'http://localhost:3333'

const useApi = () => {
  return {
    getUrlRegister: () => `${apiUrl}/users`,
    getUrlAuthentication: () => `${apiUrl}/login`,
    getUrlGetFriends: (requesterUserId: number) => `${apiUrl}/friends/${requesterUserId}`,
    getUrlGetAllUsers: (query: string) => `${apiUrl}/users?username=${query}`,
    getUrlGetUserByUsername: (username: string) => `${apiUrl}/users/username/${username}`,
    getUrlIsFriend: (requesterUserId: number, targetUserId: number) => `${apiUrl}/friends/is_friend/${requesterUserId}/${targetUserId}`,
    getUrlSendRequestFriend: () => `${apiUrl}/friends/send_request`
  }
}

export default useApi
