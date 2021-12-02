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
  marginTop: 40,
  width: 500,
  minHeight: 350,
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
  paddingBottom: 30,
  minWidth: 250
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

export const UserNameInput = styled(TextField)({
  width: '100%'
})

export const EmailInput = styled(TextField)({
  width: '100%'
})

export const PasswordInput = styled(TextField)({
  width: '100%'
})

export const PasswordConfirmationInput = styled(TextField)({
  width: '100%'
})

export const Button = styled(ButtonMUI)({
  width: '100%'
})
