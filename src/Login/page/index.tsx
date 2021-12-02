import router from 'next/router'
import { useCallback, useEffect } from 'react'

import useLogin from '../hooks/useLogin'
import usePages from '../../shared/hooks/pages/usePage'
import useUserData from '../../shared/hooks/authenticationUser/useUserData'

import {
  Page,
  Container,
  Paper,
  PaperStack,
  StackInputs,
  StackButtons,
  Title,
  UserNameInput,
  PasswordInput,
  Button
} from './styles'
import HeaderNoAuth from '../../shared/components/HeaderNoAuth'

const LoginPage = () => {
  const {
    errors,
    values,
    handleChanges,
    handleOnSubmit,
    isLoading
  } = useLogin()

  const userData = useUserData()
  const pages = usePages()

  useEffect(() => {
    if (userData.handleGetUserData()) {
      router.replace(pages.getUrlFeedPage())
    }
  }, [])

  const handleButtonDontHaveAccount = useCallback(() => {
    router.push(pages.getUrlRegisterPage())
  }, [router.push])

  return (
    <Page>
      <HeaderNoAuth />
      <Container>
        <Paper>
          <PaperStack>
            <Title>Fazer login</Title>
            <StackInputs spacing={2}>
              <UserNameInput
                required
                name="username"
                value={values.username}
                onChange={handleChanges}
                error={!!errors.username}
                helperText={errors.username && errors.username }
                label="Nome de usuário"
                variant="standard"
                disabled={isLoading}
              />
              <PasswordInput
                required
                name="password"
                value={values.password}
                onChange={handleChanges}
                error={!!errors.password}
                helperText={errors.password && errors.password }
                type='password'
                label="Senha"
                variant="standard"
                disabled={isLoading}
              />
            </StackInputs>
            <StackButtons spacing={2}>
              <Button
                variant="contained"
                onClick={e => handleOnSubmit(e as any)}
                disabled={isLoading}>
                Logar
              </Button>
              <Button
                variant="outlined"
                disabled={isLoading}
                onClick={() => handleButtonDontHaveAccount()}>
                Ainda não tenho conta
              </Button>
            </StackButtons>
          </PaperStack>
        </Paper>
      </Container>
    </Page>
  )
}

export default LoginPage
