'use client';
import React from 'react'
import Servico from './servico'
import Link from 'next/link'
import { useFetch } from '../../hooks/useSWR';
import { useSearchParams } from 'next/navigation'


// const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZibGJuc3Z0bHFubmFyaWNocHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MjYxMTQsImV4cCI6MjAwODIwMjExNH0.Oe-7ptlSTGknXpasie8JzhPkb1rjoXLW7JDEJNEZDzE';

export default function Ag() {


  const searchParams = useSearchParams()
  const uid = searchParams.get('ui');
  const { GetServicos } = useFetch();
  const { data, error, isLoading} = GetServicos(uid);

  if(!uid) return <div>Usuário não encontrado</div>
  if (error) return <div>falhou ao carregar</div>
  if (isLoading) return <div>carregando...s</div>

  return (
    <>
      <main className=" bg-secondary rounded-t-lg my-4 ">
        <div className='border-b border-b-gray-400 py-3'>
          <span className='p-3'>
            Serviços
          </span>
        </div>
        <div className='pt-3 pb-8  px-4 grid grid-cols-2 gap-4 text-white'>
          { data ? data.map(servico => <Servico key={servico.id} titulo={servico.descricao} valor={servico.valor + ",00"} duracao={servico.duracao + " minutos"}  servicoId={servico.id} uni={servico.duracao == 30 ? 1 : 2}></Servico>) : "Sem Serviços"} 

        </div>
        {/* <Link href="/users">USERS</Link> */}
      </main>
    </>
  )
}
