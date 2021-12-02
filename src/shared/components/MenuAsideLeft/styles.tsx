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

export const ButtonGroup = styled(Stack)(({ theme }) => ({
}))

export const ButtonItem = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '20px 10px 0 10px',
  padding: '10px 15px',

  '& svg': {
    color: 'white',
    margin: '0px 10px'
  }
}))

export const ButtonTitle = styled('span')(({ theme }) => ({
  color: 'white'
}))
