import { Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

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

export const MessageList = styled('span')(({ theme }) => ({
  padding: '50px 0'
}))
