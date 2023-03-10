import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import News from '../components/News'
import Service from '../components/Service'
import VContent from '../components/VContent'



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
      <News/>
      <Service/>
      <VContent/>
    
    </div>
  )
}
