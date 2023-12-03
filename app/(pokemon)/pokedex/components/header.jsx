import React from 'react'
import Link from 'next/link';

export default function HeaderPkmn({titulo, btnVoltar, posicao}) {

// const titulo = 'Pokedex';
// const posicao = 'center';
// const btnVotar = true;


  return (
    <>
        <header className={`h-20 flex bg-red-600 border-b-8 border-black relative sm:shadow-[0px_10px_rgba(0,0,0,0.3)]`}>
            <div className='w-1/12 bg-gradient-to-r from-red-800 h-auto'>
            </div>
            <div className='flex-grow self-center'>
                
                {posicao == "center" ? 
                <>
                    <div className='text-white text-4xl text-center'>
                        {titulo}        
                    </div>
                </>
                 : ''}
            </div>
            <div className='w-1/12 bg-gradient-to-l from-red-800 '>
            </div>
            {posicao == "left" ? 
            <>
                <div className='absolute top-1/4 left-10 text-white text-5xl'>
                    {btnVoltar? <Link href={'/pokedex'} title='Voltar'>{"<"}</Link> : '' } {titulo} 
                </div>
            </>
             : ''}
        </header>
    </>
  )
}
