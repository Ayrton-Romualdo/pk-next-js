import Header from './components/header'
import Link from 'next/link'
import {baseUrl} from './../../page'

async function getData() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`, {cache: 'no-store'});
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Pkdex() {

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);
  const data = await res.json();

  // const data = await getData();

  return (
    <>
      <Header btnVoltar={false} titulo={"POKEDEX"} posicao={"center"}/>

      <main className=" bg-secondary rounded-t-lg my-4 ">
        <div className='border-b border-b-gray-400 py-3'>
          <span className='p-3'>
            Pokemon
          </span>
        </div>
        <div className='pt-3 pb-8  px-4 grid grid-cols-2 gap-4 text-white'>
            <ul>
                { data ? data.data.results.map((pokemon, index) => 
                <Link key={"pkmn" + (index + 1)} href={`/pokedex/${index + 1}`} title={pokemon.name}>
                  <li key={"pkmn" + (index + 1)}>{pokemon.name}</li> 
                </Link>
                ) : 'err'}
            </ul>
        </div>
      </main>
    </>
  )

}
