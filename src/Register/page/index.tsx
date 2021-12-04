import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

import HeaderNoAuth from '../../shared/components/HeaderNoAuth'
import useUserData from '../../shared/hooks/authenticationUser/useUserData'
import usePage from '../../shared/hooks/pages/usePage'
import useRegister from '../hooks/useRegister'

import {
  Page,
  Container,
  Paper,
  PaperStack,
  StackInputs,
  StackButtons,
  Title,
  UserNameInput,
  EmailInput,
  PasswordInput,
  PasswordConfirmationInput,
  Button
} from './styles'

const RegisterPage = () => {
  const { values, errors, handleChanges, handleOnSubmit, isLoading } = useRegister()

  const router = useRouter()
  const pages = usePage()
  const userData = useUserData()

  useEffect(() => {
    if (userData.handleGetUserData()) {
      router.replace(pages.getUrlFeedPage())
    }
  }, [])

  const handleButtonAlreadyHaveAccount = useCallback(() => {
    router.push(pages.getUrlLoginPage())
  }, [router.push])

  return (
    <Page>
      <HeaderNoAuth />
      <Container>
        <Paper>
          <PaperStack>
            <Title>Criar uma conta</Title>
            <StackInputs spacing={2}>
              <UserNameInput
                required
                type='username'
                name="username"
                value={values.username}
                onChange={handleChanges}
                error={!!errors.username}
                helperText={errors.username && errors.username }
                label="Nome de usuário"
                variant="standard"
                disabled={isLoading}
                onKeyPress={e => e.key === 'Enter' && handleOnSubmit(e as any)}
              />
              <EmailInput
                required
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChanges}
                error={!!errors.email}
                helperText={errors.email && errors.email }
                variant="standard"
                disabled={isLoading}
                onKeyPress={e => e.key === 'Enter' && handleOnSubmit(e as any)}
              />
              <PasswordInput
                required
                name="password"
                type='password'
                label="Senha"
                value={values.password}
                onChange={handleChanges}
                error={!!errors.password}
                helperText={errors.password && errors.password }
                variant="standard"
                disabled={isLoading}
                onKeyPress={e => e.key === 'Enter' && handleOnSubmit(e as any)}
              />
              <PasswordConfirmationInput
                required
                name="passwordConfirmation"
                type='password'
                label="Confirmação de Senha"
                variant="standard"
                disabled={isLoading}
                value={values.passwordConfirmation}
                onChange={handleChanges}
                error={!!errors.passwordConfirmation}
                helperText={errors.passwordConfirmation && errors.passwordConfirmation }
                onKeyPress={e => e.key === 'Enter' && handleOnSubmit(e as any)}
              />
            </StackInputs>
            <StackButtons spacing={2}>
              <Button
                variant="contained"
                disabled={isLoading}
                onClick={e => handleOnSubmit(e as any)}>
                Criar
              </Button>
              <Button
                variant="outlined"
                disabled={isLoading}
                onClick={() => handleButtonAlreadyHaveAccount()}>
                Já tenho cadastro
              </Button>
            </StackButtons>
          </PaperStack>
        </Paper>
      </Container>
    </Page>
  )
}

export default RegisterPage
