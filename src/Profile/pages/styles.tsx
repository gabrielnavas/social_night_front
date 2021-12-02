import { styled } from '@mui/material/styles'
import { Button, Paper } from '@mui/material'

export const Page = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  widthMax: '100vw',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.dark
}))

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '90%',
  marginTop: 40
}))

export const Profile = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 100,
  width: 500,
  minHeight: 300,
  maxHeight: 600,
  marginTop: 50
}))

export const PerfilInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 60
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
  fontSize: '19px',
  cursor: 'pointer',
  padding: '10px 20px',
  margin: '10px 20px',
  color: theme.palette.primary.contrastText
}))

export const PerfilBio = styled(Button)(({ theme }) => ({
  fontWeight: '300',
  fontSize: '14px',
  cursor: 'pointer',
  padding: '10px 20px',
  margin: '10px 20px',
  color: theme.palette.primary.contrastText,
  textAlign: 'left'
}))

export const ProfileHeader = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '20px 0',
  paddingLeft: 20
}))

export const ButtonHeader = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}))
