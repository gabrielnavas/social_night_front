import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import useApi from '../../shared/hooks/api/useApi'
import usePage from '../../shared/hooks/pages/usePage'

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()
  const page = usePage()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validate: values => {
      const errors = {} as any
      if (values.username.length < 2) {
        errors.username = 'Nome de usuário muito pequeno.'
      }
      if (values.username.length > 255) {
        errors.username = 'Nome de usuário muito grande.'
      }
      if (values.password.length < 6) {
        errors.password = 'Senha muito pequena.'
      }
      if (values.password.length > 255) {
        errors.password = 'Senha muito grande.'
      }
      if (values.passwordConfirmation.length < 6) {
        errors.passwordConfirmation = 'Confirmação de Senha muito pequena.'
      }
      if (values.passwordConfirmation.length > 255) {
        errors.passwordConfirmation = 'Confirmação de Senha muito grande.'
      }
      if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = 'Senha diferente da Confirmação de Senha.'
      }
      if (!validateEmail(values.email)) {
        errors.email = 'Email inválido.'
      }
      return errors
    },
    onSubmit: async values => {
      setIsLoading(true)
      try {
        const [message, ok] = await requestRegister(values)
        toast(message)
        if (ok) {
          router.push(page.getUrlLoginPage())
        }
      } catch (ex) {
        toast('Servidor offline. Tente novamente mais tarde.')
      }
      setIsLoading(false)
    }
  })

  const requestRegister = useCallback(async (payload): Promise<[string, boolean]> => {
    let messageResponse = ''
    let ok = false
    const response = await fetch(api.getUrlRegister(), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const statusHttp = response.status
    if (statusHttp === 201) {
      messageResponse = 'Registrado com sucesso!'
      ok = true
    }
    if (statusHttp === 400) {
      const data = await response.json()
      messageResponse = data.message
    }
    return [messageResponse, ok]
  }, [])

  return {
    values: formik.values,
    errors: formik.errors,
    isLoading,
    handleChanges: formik.handleChange,
    handleOnSubmit: formik.handleSubmit
  }
}

export default useRegister
