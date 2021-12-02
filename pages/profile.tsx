import Head from 'next/head'
import { useRouter } from 'next/router'
import ProfilePage from '../src/Profile/pages'

const Page = () => {
  const router = useRouter()
  const query = router.query
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>
      <ProfilePage username={query.username as string}/>
    </>
  )
}

export default Page
