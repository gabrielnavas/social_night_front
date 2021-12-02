import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useUserData from '../../shared/hooks/authenticationUser/useUserData'

import usePage from '../../shared/hooks/pages/usePage'

import {
  Page,
  Container
} from './styles'

import { useSearchUsers } from '../hooks/useSearchUsers'
import ListUsers from './listUsers'
import SearchInputField from './searchInputField'
import MenuAsideLeft from '../../shared/components/MenuAsideLeft'

const SearchPage = () => {
  const router = useRouter()
  const page = usePage()
  const userData = useUserData()

  const {
    isLoading,
    users,
    handleSubmit
  } = useSearchUsers()

  useEffect(() => {
    if (!userData.handleGetUserData()) {
      router.replace(page.getUrlLoginPage())
    }
  }, [])

  return (
    <Page>
      {/* <Header /> */}
      <MenuAsideLeft />
      <Container>
        <SearchInputField isLoading={isLoading} onSubmit={handleSubmit} />
        <ListUsers users={users} isLoading={isLoading} />
      </Container>
    </Page>
  )
}

export default SearchPage
