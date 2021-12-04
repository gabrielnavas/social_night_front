import { Paper, Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Page = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  widthMax: '100vw',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.dark
}))

export const Container = styled(Stack)(() => ({
  display: 'flex',
  height: '100%',
  width: '90%',
  marginTop: 40
}))

export const Feed = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%'
}))

export const Post = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  padding: '50px 20px',
  maxWidth: 700,
  marginTop: 30
}))

export const Image = styled('img')(() => ({
  width: '100%'
}))

export const PostComment = styled('div')(() => ({
  padding: '20px 0 40px 0',
  margin: 20
}))

export const Footer = styled('div')(() => ({
}))

export const Actions = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'space-around'
}))

export const ButtonAction = styled(Button)(() => ({
}))
