import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import NextLink from 'next/link'
import Image from 'next/image';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
    }}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='pokemon'
        width={70}
        height={70}
      />

      {/* <NextLink href='/' passHref> */}
        <Link href='/'>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      {/* </NextLink> */}

      <Spacer css={{ flex: 1 }}/>

      <Link href='/favorites'>
        <Text color='white'>Favoritos</Text>
      </Link>
    </div>
  )
}
