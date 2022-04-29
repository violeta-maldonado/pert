import type { NextPage } from 'next'
import Head from 'next/head'
import AppBarM from '../components/appBar';
import HomeHeader from '../components/homeHeader';
import ProjectData from '../components/projectData';
import Activities from 'src/components/activities';
import Detail from 'src/components/detail';


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>PERT</title>
        <meta name="description" content="Generated by Violeta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <AppBarM title=' VM' />
        <HomeHeader></HomeHeader>
        <ProjectData />
        <Activities />
        <Detail />

      </main>
    </>
  )
}

export default Home
