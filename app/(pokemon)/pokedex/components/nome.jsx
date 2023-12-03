import React from 'react'
import pokeballIcon from './../../../../public/pokeball.png'
import Image from 'next/image'
import Link from 'next/link';
import loaderPokeball from './../../../../public/loaderPokeball.gif'


function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
  
function capitalize(text){
const priLetra = text.charAt(0);
const priLetraCap = priLetra.toUpperCase();

const resto = text.slice(1);

return priLetraCap + resto;
}

export default function NomePkmn(params) {
    
    return (
        <>
        <div className='border-y-4 border-x-0 sm:border-x-4 border-gray-500  sm:rounded-lg sm:shadow-[8px_8px_rgba(0,0,0,0.3)]'>
            <div className={`${params.cor} h-16 p-1 flex  border-b-4 ${params.borda} text-2xl sm:text-4xl`}>
                <Image className='h-full w-auto p-1 bg-white rounded-full' src={pokeballIcon} width={20} height={20} alt='Pokeball Icon'/>
                <span className='text-white self-center ml-4'>
                    {params.num}
                </span>
                <span className='text-white self-center ml-8'>
                    {params.namePkmn}
                </span>
            </div>
            <div className='h-28 px-2 sm:px-5 text-right flex justify-between bg-white text-base'>

                <div className='flex items-center justify-between flex-grow flex-shrink-0 w-1/3'>
                    {
                        params.prev ?
                        <>
                        <Link href={`/pokedex/${params.prev?.id}`} className='flex items-center justify-between'>
                            <span className='text-sm'>
                                ←
                            </span>
                            <Image className=' w-auto h-auto lg:w-28 lg:h-28 rounded-full self-center' src={params.prev ? params.prev.sprites.front_default : loaderPokeball.src} width={24} height={24} alt={params.prev ? 'Anterior' : 'Carregando...'} />
                        </Link>
                        
                        <Link href={`/pokedex/${params.prev?.id}`}>
                            <span className='text-sm hidden lg:block'>
                                {params.prev ? pad(params.prev.id, 3) : ''}: {params.prev ? capitalize(params.prev?.name) : ''}
                            </span>
                        </Link>
                        </>
                        : 
                        ''
                    }


                </div>

                <div className='w-auto sm:w-1/5 border-x border-gray-300 flex-shrink-0 flex items-center px-1 sm:px-4 mx-1 sm:mx-4'>
                    <Link href={'/pokedex'} className='mx-auto'>
                        Lista
                    </Link>
                </div>

                <div className='flex items-center justify-between flex-grow flex-shrink-0 w-1/3'>
                    {
                        params.next ?
                        <>
                            <Link href={`/pokedex/${params.next?.id}`}>
                                <span className='text-sm hidden lg:block'>
                                    {params.next ? pad(params.next.id, 3) : ''}: {params.next ? capitalize(params.next.name) : ''}
                                </span>
                            </Link>
                            <Link href={`/pokedex/${params.next?.id}`} className='flex items-center justify-between ml-auto'>
                                <Image className=' w-auto h-auto lg:w-28 lg:h-28 rounded-full self-center' src={params.next? params.next.sprites.front_default : loaderPokeball.src} width={24} height={24} alt={params.next ? 'Próximo' : 'Carregando...'} />
                                <span className='text-sm'>
                                    →
                                </span>
                            </Link>
                        </>
                        :
                        ''
                    }
                </div>


            </div>
        </div>
        </>
        )
    }
    