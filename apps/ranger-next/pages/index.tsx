import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'

const Home = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Image
            src={`/${router.locale}/next.svg`}
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <Button>Add To Cart</Button>
      </main>
    </>
  )
}

export default Home
