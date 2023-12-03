'use client';
import React from 'react'
import { useFetch } from '../../../../hooks/useSWR';
import { useRouter } from 'next/router';

export default function Pkmn() {
    
  const router = useRouter();
  const id = router.query.id;
  if(id === null){
    return <h1>Loading id...</h1>
  }

  return (
    <>
      <h1>Page for {id}</h1>
      <Content />
    </>
  )
}


function Content({id}){
  const { GetPkmn } = useFetch();
  const { data, error} = GetPkmn(id);

  if(error) return <h1>Failed to load</h1>
  if(!data) return <h1>Loading content....</h1>

  return (
    <>
      <h2>Detalhes do Usuário {id}</h2>
      <p>Nome: {data.results.name}</p>
    </>
  );
}