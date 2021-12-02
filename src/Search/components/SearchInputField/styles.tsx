import { Stack, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SearchStack = styled(Stack)(({ theme }) => ({
}))

export const SearchInput = styled(TextField)(({ theme }) => ({
  minWidth: '300px'
}))

export const SearchButton = styled(Button)(({ theme }) => ({
  height: 50,
  width: 70
}))
