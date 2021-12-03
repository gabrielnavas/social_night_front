const apiUrl = process.env.APU_URL || 'http://localhost:3333'

const useApi = () => {
  return {
    getUrlRegister: () => `${apiUrl}/users`,
    getUrlAuthentication: () => `${apiUrl}/login`,
    getUrlGetFriends: (requesterUserId: number) => `${apiUrl}/friends/${requesterUserId}`,
    getUrlGetAllUsers: (query: string) => `${apiUrl}/users?username=${query}`,
    getUrlGetUserByUsername: (username: string) => `${apiUrl}/users/username/${username}`,
    getUrlFriendStatus: (requesterUserId: number, targetUserId: number) => `${apiUrl}/friends/status/${requesterUserId}/${targetUserId}`,
    getUrlSendRequestFriend: () => `${apiUrl}/friends/send_request`,
    getUrlCancelSendRequestFriend: (requesterUserId: number, targetUserId: number) => `${apiUrl}/friends/cancel_request/${requesterUserId}/${targetUserId}`,
    getUrlRemoveFriendship: (requesterUserId: number, targetUserId: number) => `${apiUrl}/friends/friendship/cancel/${requesterUserId}/${targetUserId}`
  }
}

export default useApi
