import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Header from '../../shared/components/Header'
import MenuAsideLeft from '../../shared/components/MenuAsideLeft'
import useUserData from '../../shared/hooks/authenticationUser/useUserData'
import usePage from '../../shared/hooks/pages/usePage'
import { Friend, useGetAllRequesters } from '../hooks/useGetAllRequesters'

import {
  Page,
  Container,
  RequestsList,
  Request,
  ProfileInfo,
  Image,
  ProfileName,
  ActionsStack,
  ButtonAccept,
  ButtonReject
} from './styles'

const RequestsFromFriendPage = () => {
  const [friends, setFriends] = useState<Friend[]>([])
  const userData = useUserData()
  const { isLoading, handleGetAllRequesters } = useGetAllRequesters()

  const route = useRouter()
  const page = usePage()

  useEffect(() => {
    (async () => {
      const userAuth = userData.handleGetUserData()
      if (!userAuth) {
        return
      }
      const friends = await handleGetAllRequesters(userAuth.token, userAuth.user.id)
      setFriends(friends)
    })()
  }, [])

  const handleOnClickProfileInfoButton = (friend: Friend) => {
    route.push(page.getUrlUserProfile(friend.username))
  }

  const renderFriendList = () => {
    const friendsComponents = friends.map((friend) => (
      <Request key={friend.userId}>
        <ProfileInfo onClick={() => handleOnClickProfileInfoButton(friend)}>
          <Image src='https://www.ronenbekerman.com/wp-content/uploads/2015/12/Anon-Person.png' />
          <ProfileName>{friend.username}</ProfileName>
        </ProfileInfo>
        <ActionsStack spacing={5} direction='row'>
          <ButtonAccept>Aceitar</ButtonAccept>
          <ButtonReject>Recusar</ButtonReject>
        </ActionsStack>
      </Request>
    ))
    return friends.length === 0
      ? <span>Nenhuma solicitação</span>
      : friendsComponents
  }

  return (
    <Page>
      <Header />
      <Container>
        <MenuAsideLeft />
        <RequestsList>
            {
              isLoading
                ? <span>Carregando</span>
                : renderFriendList()
            }
        </RequestsList>
      </Container>
    </Page>
  )
}

export default RequestsFromFriendPage
