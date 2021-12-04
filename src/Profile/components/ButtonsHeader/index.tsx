import { Stack } from '@mui/material'
import { UserData } from '../../../shared/hooks/authenticationUser/useUserData'
import { FriendStatus } from '../../hooks/useRequestFriendStatus'
import {
  ButtonAccept,
  ButtonEdit,
  ButtonReject,
  ButtonSend
} from './styles'

type Props = {
  isLoadingPage: boolean
  userProfileIsIam: boolean
  userRequestSenderIsAm: boolean
  friendStatus: FriendStatus
  myUserAuth: UserData | null
  handlerSendRequestFriend: () => void
  handlerCancelRequestFriend: () => void
  handlerAcceptRequestFriend: () => void
  handlerRemoveFriendship: () => void
}

/**
 * Varia o botão que aparece dependendo de quem é o perfil
 */
const ButtonHeader = (props: Props) => {
  if (!props.myUserAuth) {
    return <span>carregando</span>
  }

  if (props.userProfileIsIam) {
    return (
      <ButtonEdit
        disabled={props.isLoadingPage}>
          Editar profile
      </ButtonEdit>
    )
  }

  if (props.friendStatus.status === 'Unknow') {
    return (
      <ButtonSend
        disabled={props.isLoadingPage}
        onClick={props.handlerSendRequestFriend}>
          Solicitar amizade
      </ButtonSend>
    )
  }

  if (props.friendStatus.status === 'Waiting') {
    if (props.userRequestSenderIsAm) {
      return (
        <ButtonReject
          disabled={props.isLoadingPage}
          onClick={props.handlerCancelRequestFriend}>
            Cancelar solicitação
        </ButtonReject>
      )
    } else {
      return (
        <Stack direction='column' spacing={2}>
          <span>Solicitação de amizade:</span>
          <Stack direction='row'>
            <ButtonAccept
              disabled={props.isLoadingPage}
              onClick={props.handlerAcceptRequestFriend}>
                Aceitar
            </ButtonAccept>
            <ButtonReject
              disabled={props.isLoadingPage}
              onClick={props.handlerCancelRequestFriend}>
                Recusar
            </ButtonReject>
          </Stack>
        </Stack>
      )
    }
  }

  if (props.friendStatus.status === 'Friend') {
    return (
      <ButtonReject
        disabled={props.isLoadingPage}
        onClick={props.handlerRemoveFriendship}>
          Cancelar amizade
      </ButtonReject>
    )
  }

  return <span>carregando</span>
}

export default ButtonHeader
