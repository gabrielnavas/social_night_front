import { Paper, Stack, Button, Box, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Page = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingLeft: 80,
  minHeight: '100vh',
  widthMax: '100vw',
  backgroundColor: theme.palette.primary.dark
}))

export const Container = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  width: '40%',
  marginLeft: 40,
  marginTop: 40,
  padding: '20px 0'
}))

export const ResultSearch = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%'
}))

export const UserFound = styled(Paper)(({ theme }) => ({
  display: 'flex',
  minWidth: 800,
  minHeight: 200,
  marginTop: 30,
  padding: '50px 20px',
  backgroundColor: theme.palette.primary.dark,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#2222'
  }
}))

export const UserImage = styled('img')(() => ({
  width: '100%',
  borderRadius: '100%'
}))

export const Left = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxWidth: 170,
  padding: '0 20px'
}))

export const Right = styled(Box)(() => ({
  maxWidth: 400
}))

export const Username = styled('span')(() => ({
  fontWeight: 'bold',
  fontSize: '1.6em',
  padding: '20px'
}))

export const Bio = styled('span')(() => ({
  display: 'flex',
  flexGrow: 1,
  padding: '20px'
}))

export const SearchStack = styled(Stack)(() => ({
}))

export const SearchInput = styled(TextField)(() => ({
  minWidth: '300px'
}))

export const SearchButton = styled(Button)(() => ({
  height: 50,
  width: 70
}))

export const MessageList = styled('span')(() => ({
  padding: '50px 0'
}))
