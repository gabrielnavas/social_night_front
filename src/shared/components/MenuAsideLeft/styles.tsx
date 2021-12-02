import { Paper, Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '30px 20px',
  marginLeft: 10,
  marginTop: 30,
  marginRight: 10,
  position: 'sticky',
  top: 110,
  left: 0
}))

export const PerfilInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const PerfilImageBorder = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 4,
  borderRadius: '50%',
  border: '0.5px dashed #FFF9'
}))

export const PerfilImage = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: 100,
  height: 100
}))

export const PerfilName = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '15px',
  cursor: 'pointer',
  padding: '10px 20px',
  margin: '10px 20px',
  color: theme.palette.primary.contrastText
}))

export const ButtonGroup = styled(Stack)(({ theme }) => ({
}))

export const ButtonItem = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '20px 10px 0 10px',
  padding: '15px 20px'
}))
