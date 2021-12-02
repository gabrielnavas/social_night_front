import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'sticky',
  top: 0,
  left: 0
}))
