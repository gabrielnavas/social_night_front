import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Header from '../../shared/components/Header'
import MenuAsideLeft from '../../shared/components/MenuAsideLeft'
import useUserData from '../../shared/hooks/authenticationUser/useUserData'
import usePage from '../../shared/hooks/pages/usePage'

import { useRequestIsFriend } from '../hooks/useRequestIsFriend'
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

  const isLoading = isLoadingRequestUser || isLoadingRequestIsFriend

  useEffect(() => {
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

  const renderButtonHeader = () => {
    if (userProfileIsIam) {
      return <ButtonHeader>Editar profile</ButtonHeader>
    }
    if (isFriend) {
      return <ButtonHeader>Cancelar amizade</ButtonHeader>
    } else {
      return <ButtonHeader>Solicitar amizade</ButtonHeader>
    }
  }

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
