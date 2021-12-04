import { Stack, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SearchStack = styled(Stack)(() => ({
}))

export const SearchInput = styled(TextField)(() => ({
  minWidth: '300px'
}))

export const SearchButton = styled(Button)(() => ({
  height: 50,
  width: 70
}))
