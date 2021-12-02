import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { toast } from 'react-toastify'

import useApi from '../../shared/hooks/api/useApi'
import useUserData, { UserData } from '../../shared/hooks/authenticationUser/useUserData'
import usePage from '../../shared/hooks/pages/usePage'

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)

  const api = useApi()
  const page = usePage()
  const router = useRouter()
  const userData = useUserData()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
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
      return errors
    },
    onSubmit: async values => {
      setIsLoading(true)
      try {
        const [message, data, ok] = await requestRegister(values)
        toast(message)
        if (ok) {
          userData.handleSetUserData(data)
          router.push(page.getUrlFeedPage())
        }
      } catch (ex) {
        console.log(ex)
        toast('Servidor offline. Tente novamente mais tarde.')
      }
      setIsLoading(false)
    }
  })

  const requestRegister = useCallback(async (payload): Promise<[string, UserData, boolean]> => {
    let messageResponse = ''
    let ok = false
    let userData = {} as UserData
    const response = await fetch(api.getUrlAuthentication(), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const status = response.status
    if (status === 201) {
      userData = await response.json()
      messageResponse = 'Você foi logado com sucesso!'
      ok = true
    }
    if (status === 400) {
      const data = await response.json()
      messageResponse = data.message
    }
    return [messageResponse, userData, ok]
  }, [])

  return {
    values: formik.values,
    errors: formik.errors,
    isLoading,
    handleChanges: formik.handleChange,
    handleOnSubmit: formik.handleSubmit
  }
}

export default useLogin
