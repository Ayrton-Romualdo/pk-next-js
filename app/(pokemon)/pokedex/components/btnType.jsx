import React from 'react'
import {corClass} from './../../functions/pickClass.js'

export default function btnType({tipo, cor}) {



  return (
    <div  className={`w-full h-14 rounded-xl border-stone-600 border-2 ${corClass(tipo)} flex justify-center items-center text-2xl sm:text-4xl font-bold`}>
        <div className={`flex rounded-lg w-full h-full border-2 border-t-white border-l-white border-r-stone-500 border-b-stone-500 `}>
            <span className='text-white px-1 mx-auto self-center drop-shadow-[2px_3px_rgba(0,0,0,0.3)]'>
                {tipo}
            </span>
        </div>
    </div>
  )
}
