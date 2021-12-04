import Head from 'next/head'
import RequestsFromFriendPage from '../src/RequestsFromFriend/pages'

const Page = () => {
  return (
    <>
      <Head>
        <title>Solicitações de amizade</title>
      </Head>
      <RequestsFromFriendPage />
    </>
  )
}

export default Page
