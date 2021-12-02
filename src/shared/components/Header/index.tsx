import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { AppBar, Toolbar, Button } from '@mui/material'
import ExitIcon from '@mui/icons-material/ExitToApp'
import StarIcon from '@mui/icons-material/Star'

import { toast } from 'react-toastify'

import useUserData from '../../hooks/authenticationUser/useUserData'
import usePage from '../../hooks/pages/usePage'

import {
  Container,
  ExitText,
  SocialNightText,
  SocialNightTitle
} from './styles'

const Header = () => {
  const router = useRouter()
  const page = usePage()

  const useData = useUserData()

  useEffect(() => {
    const userData = useData.handleGetUserData()
    if (!userData) {
      router.push(page.getUrlLoginPage())
    }
  }, [])

  const handleButtonLogout = () => {
    useData.handleRemoveUserData()
    toast('Você foi deslogado')
    toast('Volte sempre!!')
    router.push(page.getUrlLoginPage())
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <SocialNightTitle variant="h6" component="div">
            <StarIcon />
            <SocialNightText>
              Social Night
            </SocialNightText>
          </SocialNightTitle>
          <Button onClick={handleButtonLogout} color="inherit">
            <ExitIcon />
            <ExitText>
              Sair
            </ExitText>
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
