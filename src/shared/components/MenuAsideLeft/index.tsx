import useUserData from '../../hooks/authenticationUser/useUserData'

import {
  Container,
  ButtonGroup,
  ButtonItem,
  ButtonTitle
} from './styles'

import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'

import { useRouter } from 'next/router'
import usePage from '../../hooks/pages/usePage'

const MenuAsideLeft = () => {
  const router = useRouter()
  const page = usePage()
  const userData = useUserData()

  const userAuth = userData.handleGetUserData()

  const handleOnClickHomeButton = () => {
    router.push(page.getUrlFeedPage())
  }

  const handleOnClickSearchButton = () => {
    router.push(page.getUrlSearchUser())
  }

  const handleOnClickProfileButton = () => {
    router.push(page.getUrlUserProfile(userAuth?.user.username as string))
  }

  const handleOnClickRequestsFromFriend = () => {
    router.push(page.getUrlRequestsFromFriend())
  }

  return (
    <Container>
      <ButtonGroup>
        <ButtonItem onClick={handleOnClickHomeButton}>
          <HomeIcon />
          <ButtonTitle>Feed</ButtonTitle>
        </ButtonItem>
        <ButtonItem onClick={handleOnClickProfileButton}>
          <PersonIcon />
          <ButtonTitle>Perfil</ButtonTitle>
        </ButtonItem>
        <ButtonItem onClick={handleOnClickRequestsFromFriend}>
          <SupervisedUserCircleIcon />
          <ButtonTitle>Solicitações</ButtonTitle>
        </ButtonItem>
        <ButtonItem onClick={handleOnClickSearchButton}>
          <SearchIcon />
          <ButtonTitle>Buscar usuários</ButtonTitle>
        </ButtonItem>
        <ButtonItem>
          <SettingsIcon />
          <ButtonTitle>Configurações</ButtonTitle>
        </ButtonItem>
      </ButtonGroup>
    </Container>
  )
}

export default MenuAsideLeft
