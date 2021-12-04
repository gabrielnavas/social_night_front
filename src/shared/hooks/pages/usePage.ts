const usePage = () => {
  return {
    getUrlLoginPage: () => 'login',
    getUrlRegisterPage: () => 'register',
    getUrlFeedPage: () => 'feed',
    getUrlSearchUser: () => '/search',
    getUrlUserProfile: (username: string) => `/profile?username=${username}`,
    getUrlRequestsFromFriend: () => '/requests_from_friend'
  }
}

export default usePage
