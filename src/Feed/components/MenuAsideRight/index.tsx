import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import useUserData from '../../../shared/hooks/authenticationUser/useUserData'
import usePage from '../../../shared/hooks/pages/usePage'
import useGetFriends, { Friend } from '../../hooks/useGetFriends'

import {
  Container,
  ListUsersFounds,
  UserItem,
  UserImage,
  UserName,
  TextFieldSearchUsers
} from './styles'

const MenuAsideRight = () => {
  const [friends, setFriends] = useState([] as Friend[])

  const userData = useUserData()
  const page = usePage()
  const router = useRouter()

  const {
    isLoading,
    handleRequestGetFriends
  } = useGetFriends()

  useEffect(() => {
    (async () => {
      const myUserAuth = userData.handleGetUserData()
      if (!myUserAuth) {
        router.replace(page.getUrlLoginPage())
        return
      }

      const friends = await handleRequestGetFriends(myUserAuth.token, myUserAuth.user.id)
      setFriends(friends)
    })()
  }, [])

  const handleOnClickUserItem = (friend: Friend) => {
    router.push(page.getUrlUserProfile(friend.username))
  }

  return (
    <Container>
      <TextFieldSearchUsers
        name="standard-basic"
        label="Procurar amigos"
        variant="standard"
        disabled={isLoading}
      />
      <ListUsersFounds>
        {
          friends.length > 0
            ? (
                friends.map((friend) => (
                  <UserItem
                    key={friend.userId}
                    onClick={() => handleOnClickUserItem(friend)}>
                    {
                      friend.image
                        ? (
                        <UserImage src={friend.image} />
                          )
                        : (
                        <UserImage src='https://www.ronenbekerman.com/wp-content/uploads/2015/12/Anon-Person.png' />
                          )
                    }
                    <UserName>{friend.username}</UserName>
                  </UserItem>
                ))
              )
            : <span>Nenhum amigo adicionado ainda.</span>
        }
      </ListUsersFounds>
    </Container>
  )
}

export default MenuAsideRight
