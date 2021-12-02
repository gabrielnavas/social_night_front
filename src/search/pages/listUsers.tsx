import { User } from '../hooks/useSearchUsers'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import {
  ResultSearch,
  UserFound,
  Left,
  UserImage,
  Right,
  Username,
  Bio
} from './styles'

type Props = {
  users: User[]
  isLoading: boolean
}

const ListUsers = (props: Props) => {
  if (props.isLoading) {
    return <span>Aguarde...</span>
  }

  if (props.users.length === 0) {
    return <span>nenhum usuário encontrado</span>
  }

  return (
    <ResultSearch>
      {
        props.users.map(user => (
            <UserFound key={user.id}>
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
