import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#313dad',
      light: '#717ac7',
      dark: '#000000',
      contrastText: '#fbfbff'
    },
    secondary: {
      main: '#f50057'
    }
  }
})

export default theme
