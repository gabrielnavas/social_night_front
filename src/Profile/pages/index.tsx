import { useCallback, useEffect, useState } from 'react'

import Header from '../../shared/components/Header'
import MenuAsideLeft from '../../shared/components/MenuAsideLeft'
import useUserData, { UserData } from '../../shared/hooks/authenticationUser/useUserData'
import ButtonHeader from '../components/ButtonsHeader'
import { useRequestAcceptRequestFriend } from '../hooks/useRequestAcceptRequestFriend'
import { useRequestCancelRequestFriend } from '../hooks/useRequestCancelRequestFriend'

import { FriendStatus, useRequestFriendStatus } from '../hooks/useRequestFriendStatus'
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
  ProfileHeader
} from './styles'

type Props = {
  username: string
}

const ProfilePage = (props: Props) => {
  // state: pessoa logada
  const [myUserAuth, setMyUserAuth] = useState<UserData | null>(null)

  // state: pessoa atual da pagina
  const [userProfile, setUserProfile] = useState<User>()

  // state: status da relação do usuario logado com o perfil atual da pagina
  const [friendStatus, setFriendStatus] = useState<FriendStatus>({ status: 'Unknow' })

  // state: flag dizendo se o perfil atual da pagina é a pessoa logada
  const [userProfileIsIam, setUserProfileIsIam] = useState(false)

  // hook: pegar dados da pessoa logada
  const userData = useUserData()

  // hook: pegar a pessoa atua da pagina
  const {
    isLoading: isLoadingRequestUser,
    handleRequestUser
  } = useRequestUser()

  // hook: pegar o status da relação do usuario logado com o perfil atual da pagina
  const {
    isLoading: isLoadingRequestIsFriend,
    handleRequestFriendStatus
  } = useRequestFriendStatus()

  // hook: manda uma solicitação de amizade
  const {
    isLoading: isLoadingRequestSendRequestFriend,
    handlSendRequestFriend
  } = useRequestSendRequestFriend()

  // hook: cancela uma solicitação de amizade
  const {
    isLoading: isLoadingRequestCancelRequestFriend,
    handleRequestCancelRequestFriend
  } = useRequestCancelRequestFriend()

  // hook: aceita uma solicitação de amizade
  const {
    isLoading: isLoadingAcceptRequestFriend,
    handleRequestAcceptRequestFriend
  } = useRequestAcceptRequestFriend()

  // hook: remove uma amizade
  const {
    isLoading: isLoadingRequestRemoveFriendship,
    handleRequestRemoveFriendship
  } = useRequestRemoveFriendship()

  const isLoading =
    isLoadingRequestUser ||
    isLoadingRequestIsFriend ||
    isLoadingRequestSendRequestFriend ||
    isLoadingRequestCancelRequestFriend ||
    isLoadingRequestRemoveFriendship ||
    isLoadingAcceptRequestFriend

  useEffect(() => {
    /**
     * Pega o profile que vem do username do props.
     * Verifica se o profile é a pessoa logada.
     * Verifica se ele já é amigo da pessoa logada.
     */

    (async () => {
      // pega dados da pessoa authenticada
      const userAuth = userData.handleGetUserData()
      if (!userAuth) {
        return
      }
      setMyUserAuth(userAuth)

      // verifica se ja veio o username da query url
      if (!props.username) {
        return
      }

      // pega os dados da pessoa do perfil da pagina
      const userProfile = await handleRequestUser(userAuth.token as string, props.username)
      if (!userProfile) {
        return
      }

      // verifica se a pessoa logada é dona do profile da pagina
      if (userAuth.user.id === userProfile.id) {
        setUserProfileIsIam(true)
      }
      setUserProfile(userProfile)

      // pega o status atual do usuário logado e o usuário da pagina
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

      // update friend status
      const statusFriend = await handleRequestFriendStatus(
        myUserAuth.token as string,
        myUserAuth.user.id as number,
        userProfile.id as number)
      setFriendStatus(statusFriend)
    })()
  }, [handlSendRequestFriend])

  const handlerCancelRequestFriend = useCallback(() => {
    (async () => {
      if (!myUserAuth || !userProfile) {
        return
      }
      await handleRequestCancelRequestFriend(myUserAuth.token, myUserAuth.user.id, userProfile.id)

      // update friend status
      const statusFriend = await handleRequestFriendStatus(
        myUserAuth.token as string,
        myUserAuth.user.id as number,
        userProfile.id as number)
      setFriendStatus(statusFriend)
    })()
  }, [handleRequestCancelRequestFriend])

  const handlerAcceptRequestFriend = useCallback(() => {
    (async () => {
      if (!myUserAuth || !userProfile) {
        return
      }
      await handleRequestAcceptRequestFriend(myUserAuth.token, myUserAuth.user.id, userProfile.id)

      // update friend status
      const statusFriend = await handleRequestFriendStatus(
        myUserAuth.token as string,
        myUserAuth.user.id as number,
        userProfile.id as number)
      setFriendStatus(statusFriend)
    })()
  }, [handleRequestAcceptRequestFriend])

  const handlerRemoveFriendship = useCallback(() => {
    (async () => {
      if (!myUserAuth || !userProfile) {
        return
      }
      await handleRequestRemoveFriendship(myUserAuth.token, myUserAuth.user.id, userProfile.id)

      // update friend status
      const statusFriend = await handleRequestFriendStatus(
        myUserAuth.token as string,
        myUserAuth.user.id as number,
        userProfile.id as number)
      setFriendStatus(statusFriend)
    })()
  }, [handleRequestRemoveFriendship])

  return (
    <Page>
      <Header />
      <Container>
        <MenuAsideLeft />
        <Profile>
          <ProfileHeader>
            <ButtonHeader
              isLoadingPage={isLoading}
              userProfileIsIam={userProfileIsIam}
              userRequestSenderIsAm={friendStatus.requesterUserId === myUserAuth?.user.id}
              friendStatus={friendStatus}
              myUserAuth={myUserAuth}
              handlerSendRequestFriend={handlerSendRequestFriend}
              handlerCancelRequestFriend={handlerCancelRequestFriend}
              handlerAcceptRequestFriend={handlerAcceptRequestFriend}
              handlerRemoveFriendship={handlerRemoveFriendship}
            />
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
