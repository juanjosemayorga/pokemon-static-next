import { Grid } from '@nextui-org/react';
import { GetStaticProps } from 'next';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

export default function HomePage({ pokemons }: Props) {
  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon: SmallPokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const baseUrl = (id: string) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      image: baseUrl((index + 1).toString())
    }
  ))

  return {
    props: {
      pokemons
    }
  }
}
