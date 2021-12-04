import { Button, Paper, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Page = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  widthMax: '100vw',
  backgroundColor: theme.palette.primary.dark
}))

export const Container = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  marginTop: 40,
  marginLeft: 200
}))

export const RequestsList = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 100
}))

export const Request = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.dark,
  padding: '20px 40px',
  marginTop: 30
}))

export const ProfileInfo = styled(Button)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 40px'
}))

export const Image = styled('img')(() => ({
  width: '70px',
  height: '70px'
}))

export const ProfileName = styled('div')(() => ({
  textAlign: 'center',
  margin: '10px 0 5px 0',
  color: 'white'
}))

export const ActionsStack = styled(Stack)(() => ({
  padding: '20px 40px'
}))

export const ButtonAccept = styled(Button)(({ theme }) => ({
  background: theme.palette.success.dark,
  color: 'white',
  padding: '10px 30px'
}))

export const ButtonReject = styled(Button)(({ theme }) => ({
  background: theme.palette.error.dark,
  color: 'white',
  padding: '10px 30px'

}))
