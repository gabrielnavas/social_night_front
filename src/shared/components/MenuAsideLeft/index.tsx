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

import { useRouter } from 'next/router'
import usePage from '../../hooks/pages/usePage'

const MenuAsideLeft = () => {
  const router = useRouter()
  const page = usePage()
  const userData = useUserData()

  const userAuth = userData.handleGetUserData()

  const handleHomeButton = () => {
    router.push(page.getUrlFeedPage())
  }

  const handleSearchButton = () => {
    router.push(page.getUrlSearchUser())
  }

  const handleProfileButton = () => {
    router.push(page.getUrlUserProfile(userAuth?.user.username as string))
  }

  return (
    <Container>
      <ButtonGroup>
        <ButtonItem onClick={handleHomeButton}>
          <HomeIcon />
          <ButtonTitle>Feed</ButtonTitle>
        </ButtonItem>
        <ButtonItem>
          <PersonIcon />
          <ButtonTitle onClick={handleProfileButton}>Perfil</ButtonTitle>
        </ButtonItem>
        <ButtonItem onClick={handleSearchButton}>
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
