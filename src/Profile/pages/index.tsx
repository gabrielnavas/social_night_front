import { useCallback, useEffect, useState } from 'react'

import Header from '../../shared/components/Header'
import MenuAsideLeft from '../../shared/components/MenuAsideLeft'
import useUserData, { UserData } from '../../shared/hooks/authenticationUser/useUserData'
import { useRequestCancelRequestFriend } from '../hooks/useRequestCancelRequestFriend'

import { Status, useRequestFriendStatus } from '../hooks/useRequestFriendStatus'
import { useRequestRemoveFriendship } from '../hooks/useRequestRemoveFriendship'
import { useRequestSendRequestFriend } from '../hooks/useRequestSendRequestFriend'
import { User, useRequestUser } from '../hooks/useRequestUser'

import {
  Page,
  Container,
  Profile,
  PerfilInfo,
  PerfilImageBorder,
  PerfilImage,
  PerfilName,
  PerfilBio,
  ProfileHeader,
  ButtonHeader
} from './styles'

type Props = {
  username: string
}

const ProfilePage = (props: Props) => {
  const [myUserAuth, setMyUserAuth] = useState<UserData | null>(null)
  const [userProfile, setUserProfile] = useState<User>()
  const [friendStatus, setFriendStatus] = useState<Status>('Unknow')
  const [userProfileIsIam, setUserProfileIsIam] = useState(false)

  const userData = useUserData()

  const {
    isLoading: isLoadingRequestUser,
    handleRequestUser
  } = useRequestUser()

  const {
    isLoading: isLoadingRequestIsFriend,
    handleRequestFriendStatus
  } = useRequestFriendStatus()

  const {
    isLoading: isLoadingRequestSendRequestFriend,
    handlSendRequestFriend
  } = useRequestSendRequestFriend()

  const {
    isLoading: isLoadingRequestCancelRequestFriend,
    handleRequestCancelRequestFriend
  } = useRequestCancelRequestFriend()

  const {
    isLoading: isLoadingRequestRemoveFriendship,
    handleRequestRemoveFriendship
  } = useRequestRemoveFriendship()

  const isLoading = isLoadingRequestUser || isLoadingRequestIsFriend || isLoadingRequestSendRequestFriend || isLoadingRequestCancelRequestFriend || isLoadingRequestRemoveFriendship

  useEffect(() => {
    /**
     * Pega o profile que vem do username do props.
     * Verifica se o profile é a pessoa logada.
     * Verifica se ele já é amigo da pessoa logada.
     */

    (async () => {
      const userAuth = userData.handleGetUserData()
      if (!userAuth) {
        return
      }
      setMyUserAuth(userAuth)

      if (!props.username) {
        return
      }
      const userProfile = await handleRequestUser(userAuth.token as string, props.username)
      if (!userProfile) {
        return
      }
      if (myUserAuth?.user.id === userProfile?.id) {
        setUserProfileIsIam(true)
      }
      setUserProfile(userProfile)

      const statusFriend = await handleRequestFriendStatus(
        userAuth.token as string,
        userAuth.user.id as number,
        userProfile.id as number)
      setFriendStatus(statusFriend)
    })()
  }, [props.username])

  const handlerSendRequestFriend = useCallback(() => {
    (async () => {
      if (!myUserAuth || !userProfile) {
        return
      }
      await handlSendRequestFriend(myUserAuth.token, myUserAuth.user.id, userProfile.id)
      setFriendStatus('Waiting')
    })()
  }, [handlSendRequestFriend])

  const handlerCancelRequestFriend = useCallback(() => {
    (async () => {
      if (!myUserAuth || !userProfile) {
        return
      }
      await handleRequestCancelRequestFriend(myUserAuth.token, myUserAuth.user.id, userProfile.id)
      setFriendStatus('Unknow')
    })()
  }, [handleRequestCancelRequestFriend])

  const handlerRemoveFriendship = useCallback(() => {
    (async () => {
      if (!myUserAuth || !userProfile) {
        return
      }
      await handleRequestRemoveFriendship(myUserAuth.token, myUserAuth.user.id, userProfile.id)
      setFriendStatus('Unknow')
    })()
  }, [handleRequestCancelRequestFriend])

  const renderButtonHeader = () => {
    /**
     * Varia o botão que aparece dependendo de quem é o perfil
     */
    if (userProfileIsIam) {
      return <ButtonHeader disabled={isLoading}>Editar profile</ButtonHeader>
    }
    if (friendStatus === 'Unknow') {
      return <ButtonHeader disabled={isLoading} onClick={handlerSendRequestFriend}>Solicitar amizade</ButtonHeader>
    }
    if (friendStatus === 'Waiting') {
      return <ButtonHeader disabled={isLoading} onClick={handlerCancelRequestFriend}>Cancelar solicitação</ButtonHeader>
    }
    if (friendStatus === 'Friend') {
      return <ButtonHeader disabled={isLoading} onClick={handlerRemoveFriendship}>Cancelar amizade</ButtonHeader>
    }
  }

  return (
    <Page>
      <Header />
      <Container>
        <MenuAsideLeft />
        <Profile>
          <ProfileHeader>
            {renderButtonHeader()}
          </ProfileHeader>
          <PerfilInfo>
            <PerfilImageBorder>
              {
                userProfile?.image
                  ? <PerfilImage src={userProfile.image} />
                  : <PerfilImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkQGN0yiPfcvIZHuy7-dsdR38rIHqARPyUA&usqp=CAU' />
              }
            </PerfilImageBorder>
            <PerfilName>{userProfile?.username}</PerfilName>
            <PerfilBio>{userProfile?.bio}</PerfilBio>
          </PerfilInfo>
        </Profile>
      </Container>
    </Page>
  )
}

export default ProfilePage
