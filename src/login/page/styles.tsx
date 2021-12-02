import { styled } from '@mui/material/styles'
import {
  TextField,
  Stack as StackMUI,
  Button as ButtonMUI,
  Paper as PaperMUI
} from '@mui/material'

export const Page = styled('div')(({ theme }) => ({
}))

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}))

export const Paper = styled(PaperMUI)(({ theme }) => ({
  marginTop: 130,
  width: 600,
  minHeight: 400,
  padding: '20px 50px 40px 50px',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: theme.palette.primary.dark
  }
}))

export const PaperStack = styled(StackMUI)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'

}))

export const StackInputs = styled(StackMUI)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  paddingBottom: 30
}))

export const StackButtons = styled(StackMUI)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}))

export const Title = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(3),
  fontSize: 30,

  [theme.breakpoints.only('xs')]: {
    fontSize: 16
  }
}))

export const UserNameInput = styled(TextField)({})

export const PasswordInput = styled(TextField)({})

export const Button = styled(ButtonMUI)({
  width: '100%'
})
