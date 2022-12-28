import { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Juan Jose Mayorga" />
        <meta name="description" content={`información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px',
      }}>
        {children}
      </main>
    </>
  )
}
