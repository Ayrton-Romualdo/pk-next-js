'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// imagens
import fundoBallCinza from './../../../../public/fundo_ball_cinza.png'

export default function pkSprite(params) {

    const [sprite, setSprite] = useState(params.sprite)
    const [shiny, setShiny] = useState(params.shiny)

    function changeSprite(){
        var temp = sprite
        setSprite(shiny)
        setShiny(temp)
    }

    return (
    <div onClick={changeSprite} className='w-full sm:w-2/5 relative flex'>
        {params.dataPkmn ? 
        <>
            <Image alt='fundo cinza' src={fundoBallCinza.src} width={300} height={300} className='absolute w-full h-full -z-10 p-4'  />
            <Image className='mx-auto w-full' src={sprite} alt="Front Default" width={300} height={300} />
        </>
        :
        <div className='w-full h-full text-gray-400'>
            <svg className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
            </svg>
        </div>
        }

        <div onClick={changeSprite} className='hidden sm:block w-full sm:w-1/4 flex-shrink-0  rounded-xl sm:shadow-[8px_8px_rgba(0,0,0,0.3)] bg-white border-4 border-gray-500 absolute bottom-0'>
            {params.dataPkmn 
                ? 
                <>
                    <div className={`h-6 ${params.cor} border-b-4 ${params.borda}`}></div>
                    <Image alt='Front Shiny' className='mx-auto' width={150} height={150} src={shiny} />
                </>
                :
                <div className='w-full h-full text-gray-400'>
                    <svg className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
                    </svg>
                </div>
            }
        </div>
    </div>
    )
}
