import Link from 'next/link'
import React from 'react'

export default function Servico(props) {
  return (
    <div className="card bg-base-100 shadow-xl">
        <h2 className="card-title pl-8 mt-4">{props.titulo}</h2>
        <div className="card-body">
        <div className='grid grid-cols-2 gap-2 text-center py-2 border-y border-y-white'>
            <span className=''>Valor</span>
            <span className=''>Duração</span>
        </div>
        <div className='grid grid-cols-2 gap-2 text-center py-2'>
            <span className=''>{props.valor}</span>
            <span className=''>{props.duracao}</span>
        </div>
        <div className='mt-4'>
          <Link href={`/ag/agenda?servico=${props.servicoId}&uni=${props.uni}`} title='Agenda Agora'>
            <button className='w-full btn btn-primary'>Agende agora</button>
          </Link>
        </div>
        </div>
    </div>
  )
}
