import { useRouter } from 'next/router'

import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import usePage from '../../hooks/pages/usePage'

const HeaderNoAuth = () => {
  const router = useRouter()
  const page = usePage()

  const handleButtonLogin = () => {
    router.push(page.getUrlLoginPage())
  }

  const handleButtonRegister = () => {
    router.push(page.getUrlRegisterPage())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social Night
          </Typography>
          <Button onClick={handleButtonLogin} color="inherit">Login</Button>
            <span>|</span>
          <Button onClick={handleButtonRegister} color="inherit">Registrar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderNoAuth
