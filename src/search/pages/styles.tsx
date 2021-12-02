import { Paper, Stack, Button, Box, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Page = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingLeft: 200,
  minHeight: '100vh',
  widthMax: '100vw',
  backgroundColor: theme.palette.primary.dark
}))

export const Container = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'red',
  height: '100%',
  width: '40%',
  marginLeft: 100,
  marginTop: 100,
  padding: '20px 0'
}))

export const ResultSearch = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%'
}))

export const UserFound = styled(Paper)(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  backgroundColor: theme.palette.primary.dark,
  padding: '50px 20px',
  minWidth: 800,
  minHeight: 200,
  marginTop: 30,

  '&:hover': {
    backgroundColor: '#2222'
  }
}))

export const UserImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '100%'
}))

export const Left = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxWidth: 170,
  padding: '0 20px'
}))

export const Right = styled(Box)(({ theme }) => ({
  maxWidth: 400
}))

export const Username = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.6em',
  padding: '20px'
}))

export const Bio = styled('span')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  padding: '20px'
}))

export const SearchStack = styled(Stack)(({ theme }) => ({
}))

export const SearchInput = styled(TextField)(({ theme }) => ({
  minWidth: '300px'
}))

export const SearchButton = styled(Button)(({ theme }) => ({
  height: 50,
  width: 70
}))
