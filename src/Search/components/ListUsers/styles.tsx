import { Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ResultSearch = styled('div')(() => ({
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
  width: 500,
  minHeight: 200,
  marginTop: 30,

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

export const MessageList = styled('span')(() => ({
  padding: '50px 0'
}))
