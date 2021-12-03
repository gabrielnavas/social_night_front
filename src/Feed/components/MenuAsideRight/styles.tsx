import { Button, Paper, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(({ theme }) => ({

  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '30px 10px',
  width: '430px',
  marginLeft: 10,
  marginTop: 30,
  marginRight: 10,
  position: 'sticky',
  top: 160,
  left: 0

}))

export const ListUsersFounds = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '100%',
  padding: '10px 0 0 0',
  overflowY: 'auto',
  maxHeight: '500px'
}))

export const UserItem = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '5px',
  cursor: 'pointer',
  margin: '5px',

  '&:hover': {
    boxShadow: theme.shadows[4]
  }
}))

export const UserImage = styled('img')(({ theme }) => ({
  width: '90px',
  height: '90px'
}))

export const UserName = styled('span')(({ theme }) => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  overflow: 'hidden !important',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  paddingTop: 5,
  width: '100%'
}))

export const TextFieldSearchUsers = styled(TextField)(({ theme }) => ({
  marginBottom: 40
}))
