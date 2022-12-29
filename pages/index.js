import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'



export default function Home() {
  return (
    <div>
      <Head>
        <title>VOE - Voice Of Engineers</title>
        <meta name="description" content="Non-Profit Organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Intro/>
    
    </div>
  )
}
