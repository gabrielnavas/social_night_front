import { useEffect } from 'react'
import { useRouter } from 'next/router'

import FavoriteIcon from '@mui/icons-material/Favorite'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'
import MenuAsideLeft from '../../shared/components/MenuAsideLeft'

import {
  Container,
  Feed,
  Page,
  Post,
  Image,
  PostComment,
  Footer,
  Actions,
  ButtonAction
} from './styles'
import Header from '../../shared/components/Header'

import useUserData from '../../shared/hooks/authenticationUser/useUserData'
import usePage from '../../shared/hooks/pages/usePage'
import MenuAsideRight from '../components/MenuAsideRight'

const FeedPage = () => {
  const useData = useUserData()

  const page = usePage()
  const router = useRouter()

  useEffect(() => {
    const userData = useData.handleGetUserData()
    if (!userData) {
      router.replace(page.getUrlLoginPage())
    }
  }, [])

  return (
    <Page>
      <Header />
      <Container spacing={10} direction='row'>
        <MenuAsideLeft />
        <Feed>
          {
            Array(10).fill('').map((_, index) => (
              <Post key={index}>
                <Image src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80' />
                <PostComment>
                  Lorem Ipsum is simply dummy text of the printing
                   and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy
                     text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to
                       make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It
                         was popularised in the 1960s with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently with desktop publishing
                           software like Aldus PageMaker including versions of Lorem Ipsum
                  </PostComment>
                <Footer>
                  <Actions direction='row' spacing={4}>
                    <ButtonAction><FavoriteIcon /></ButtonAction>
                    <ButtonAction><ShareIcon /></ButtonAction>
                    <ButtonAction><MessageIcon /></ButtonAction>
                  </Actions>
                </Footer>
              </Post>
            ))
          }
        </Feed>
        <MenuAsideRight />
      </Container>
    </Page>
  )
}

export default FeedPage
