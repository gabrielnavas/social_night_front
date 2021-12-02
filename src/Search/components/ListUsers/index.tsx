import { useRouter } from 'next/router'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import usePage from '../../../shared/hooks/pages/usePage'

import { User } from '../../hooks/useSearchUsers'

import {
  ResultSearch,
  UserFound,
  Left,
  UserImage,
  Right,
  Username,
  Bio,
  MessageList
} from './styles'

type Props = {
  users: User[]
  isLoading: boolean
}

const ListUsers = (props: Props) => {
  const router = useRouter()
  const page = usePage()

  if (props.isLoading) {
    return <span>Aguarde...</span>
  }

  if (props.users.length === 0) {
    return <MessageList>nenhum usuário encontrado</MessageList>
  }

  const handleOnClickUserFound = (user: User) => {
    router.push(page.getUrlUserProfile(user.username))
  }

  return (
    <ResultSearch>
      {
        props.users.map(user => (
            <UserFound key={user.id} onClick={() => handleOnClickUserFound(user)}>
              <Left>
                {
                  user.image
                    ? (
                    <UserImage src={user.image} />
                      )
                    : (
                    <AccountCircleIcon />
                      )
                }
                </Left>
              <Right>
                <Username>{user.username}</Username>
                <Bio>{user.bio}</Bio>
              </Right>
            </UserFound>
        ))
      }
    </ResultSearch>
  )
}

export default ListUsers
