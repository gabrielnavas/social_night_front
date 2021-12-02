import { UserData } from '../../hooks/authenticationUser/useUserData'

import {
  Container,
  PerfilImage,
  PerfilImageBorder,
  PerfilInfo,
  PerfilName,
  ButtonGroup,
  ButtonItem
} from './styles'

import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import usePage from '../../hooks/pages/usePage'

type Props = {
  userData?: UserData
}

const MenuAsideLeft = ({ userData }: Props) => {
  const router = useRouter()
  const page = usePage()

  const handleHomeButton = () => {
    router.push(page.getUrlFeedPage())
  }

  const handleSearchButton = () => {
    router.push(page.getUrlSearchUser())
  }

  return (
    <Container>
      <PerfilInfo>
        <PerfilImageBorder>
          <PerfilImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkQGN0yiPfcvIZHuy7-dsdR38rIHqARPyUA&usqp=CAU' />
        </PerfilImageBorder>
        {userData && userData.user && (
          <PerfilName>{userData.user.username}</PerfilName>
        )}
      </PerfilInfo>
      <ButtonGroup>
        <ButtonItem onClick={handleHomeButton}><HomeIcon />Feed</ButtonItem>
        <ButtonItem><SettingsIcon />Configurações</ButtonItem>
        <ButtonItem onClick={handleSearchButton}><SearchIcon />Buscar usuários</ButtonItem>
      </ButtonGroup>
    </Container>
  )
}

export default MenuAsideLeft
