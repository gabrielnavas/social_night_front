import { Paper, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '30px 20px',
  width: '430px',
  position: 'sticky',
  top: 110,
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

export const UserItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '5px'
}))

export const UserImage = styled('img')(({ theme }) => ({
  width: '90px',
  height: '90px'
}))

export const UserUserName = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: '88px',
  whiteSpace: 'nowrap',
  overflow: 'hidden !important',
  textOverflow: 'ellipsis'
}))

export const TextFieldSearchUsers = styled(TextField)(({ theme }) => ({
  marginBottom: 40
}))
