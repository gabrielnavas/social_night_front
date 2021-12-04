import { Paper, Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '30px 10px',
  marginLeft: 10,
  marginTop: 30,
  marginRight: 10,
  position: 'sticky',
  top: 110,
  left: 0
}))

export const ButtonGroup = styled(Stack)(() => ({
}))

export const ButtonItem = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '20px 10px 0 10px',
  padding: '10px',

  '& svg': {
    color: 'white',
    margin: '0px 10px'
  }
}))

export const ButtonTitle = styled('span')(() => ({
  textAlign: 'left',
  color: 'white'
}))
