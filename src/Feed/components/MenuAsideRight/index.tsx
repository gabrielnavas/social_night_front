import useGetFriends from '../../hooks/useGetFriends'
import {
  Container,
  ListUsersFounds,
  UserItem,
  UserImage,
  UserUserName,
  TextFieldSearchUsers
} from './styles'

const MenuAsideRight = () => {
  const {
    friends,
    isLoading
  } = useGetFriends()

  return (
    <Container>
      <TextFieldSearchUsers
        name="standard-basic"
        label="Procurar amigos"
        variant="standard"
        disabled={isLoading}
      />
      <ListUsersFounds>
        {
          friends.length > 0
            ? (
                friends.map((friend) => (
              <UserItem key={friend.userId}>
                {
                  friend.image
                    ? (
                    <UserImage src={friend.image} />
                      )
                    : (
                    <UserImage src='https://www.ronenbekerman.com/wp-content/uploads/2015/12/Anon-Person.png' />
                      )
                }
                <UserUserName>{friend.username}</UserUserName>
              </UserItem>
                ))
              )
            : <span>Nenhum amigo adicionado ainda.</span>
        }
      </ListUsersFounds>
    </Container>
  )
}

export default MenuAsideRight
