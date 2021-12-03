import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import Header from '../../shared/components/Header'
import MenuAsideLeft from '../../shared/components/MenuAsideLeft'
import useUserData from '../../shared/hooks/authenticationUser/useUserData'
import usePage from '../../shared/hooks/pages/usePage'

import { useRequestIsFriend } from '../hooks/useRequestIsFriend'
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
  const userData = useUserData()
  const myUserAuth = userData.handleGetUserData()
  const router = useRouter()
  const page = usePage()

  const [userProfile, setUserProfile] = useState<User>()
  const [isFriend, setIsFriend] = useState(false)
  const [userProfileIsIam, setUserProfileIsIam] = useState(false)

  const {
    isLoading: isLoadingRequestUser,
    handleRequestUser
  } = useRequestUser()

  const {
    isLoading: isLoadingRequestIsFriend,
    handleRequestIsMyFriend
  } = useRequestIsFriend()

  const {
    handlSendRequestFriend,
    isLoading: isLoadingRequestSendRequestFriend
  } = useRequestSendRequestFriend()

  const isLoading = isLoadingRequestUser || isLoadingRequestIsFriend || isLoadingRequestSendRequestFriend

  useEffect(() => {
    /**
     * Pega o profile que vem do username do props.
     * Verifica se o profile é a pessoa logada.
     * Se der errado redireciona para o feed.
     */
    (async () => {
      const userProfile = await handleRequestUser(myUserAuth?.token as string, props.username)
      if (userProfile) {
        if (myUserAuth?.user.id === userProfile?.id) {
          setUserProfileIsIam(true)
        }
        setUserProfile(userProfile)
      } else {
        router.replace(page.getUrlFeedPage())
      }
    })()
  }, [props.username])

  useEffect(() => {
    /**
     * Verifica se o dono do profile ja foi carregado e o usuário do usuário existe.
     * Verifica se ele já é amigo da pessoa logada.
     */
    (async () => {
      if (userProfile && myUserAuth) {
        const isFriend = await handleRequestIsMyFriend(
          myUserAuth.token as string,
          myUserAuth.user.id as number,
          userProfile.id as number)
        setIsFriend(isFriend)
      }
    })()
  }, [])

  const handlerSendRequestFriend = useCallback(() => {
    (async () => {
      if (myUserAuth && userProfile) {
        await handlSendRequestFriend(myUserAuth.token, myUserAuth.user.id, userProfile.id)
      }
    })()
  }, [])

  const renderButtonHeader = () => {
    /**
     * Varia o botão que aparece dependendo de quem é o perfil
     */
    if (userProfileIsIam) {
      return <ButtonHeader>Editar profile</ButtonHeader>
    }
    if (isFriend) {
      return <ButtonHeader>Cancelar amizade</ButtonHeader>
    } else {
      return <ButtonHeader onClick={handlerSendRequestFriend}>Solicitar amizade</ButtonHeader>
    }
  }

  // Todo: melhor isso
  if (isLoading) {
    <div>Loading</div>
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
