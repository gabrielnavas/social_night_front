import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'sticky',
  top: 0,
  left: 0
}))

export const ExitText = styled('span')(({ theme }) => ({
  marginLeft: 10
}))

export const SocialNightText = styled('span')(({ theme }) => ({
  marginLeft: 10
}))

export const SocialNightTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  height: '100%',
  borderBottom: '1px dashed white',
  marginLeft: 60,
  color: theme.palette.primary.light
}))
