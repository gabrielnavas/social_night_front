import { useEffect } from 'react'
import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { toast } from 'react-toastify'

import useUserData from '../../hooks/authenticationUser/useUserData'
import usePage from '../../hooks/pages/usePage'

import {
  Container
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
          <Typography variant="h6" component="div">
            Social Night
          </Typography>
          <Button onClick={handleButtonLogout} color="inherit">Sair</Button>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
