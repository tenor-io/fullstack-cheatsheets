import Head from 'next/head'
import Card from '../components/cards'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FullStack Cheatsheets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-center">
        <h1 className="">FullStack Cheatsheets</h1>
        <h2>Vim</h2>
      </header>
      <main>
        <div className={'flex flex-wrap justify-around'}>
          <Card title={'Category'} />
          <Card title={'Category'} />
          <Card title={'Category'} />
          <Card title={'Category'} />
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
