import React from 'react'
import { useFetch } from '../../../../hooks/useSWR';
import useSWR from 'swr';

// const { GetPkmnList } = useFetch();
// const { data, error, isLoading} = GetPkmnList();

const fetcher = (...args) => fetch(...args).then(res => res.json())
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {

    const {pkmns, error, isLoading} = useSWR('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0', fetcher);
    // const pkmns = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then((res) => res.json())
    // const pkmns = await data
   
    let ids = [];

    pkmns.results.map((pkmn, index) => {
      var idU = index + 1;
      idU = idU.toString();
      ids.push({id: idU, name: pkmn.name})
    });
    
    return ids;

  }



export default function Pkmn({params}) {
    const {id} = params;
    async function getPokemon(){
      const lista = await generateStaticParams();
      const pkmn = lista.find((el, index) => index + 1 == id)
      console.log(pkmn)
    
      return pkmn.name;
    }

    const pkmn = getPokemon();

    return (
      <>
        <h1>Detalhes do Usuário {id}</h1>
        <p>Nome: {pkmn}</p>
      </>
    )
}


