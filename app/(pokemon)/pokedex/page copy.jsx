'use client';
import React, { useContext, useEffect, useState } from 'react'
import { useFetch } from '../../../hooks/useSWR';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Header from './components/header'
import Nome from './components/nome'
import BtnType from './components/btnType'
import Image from 'next/image'

// scripts
import {corClass, bordaClass} from './../functions/pickClass.js'

// imagens
import fundoGrid from './../../../public/fundo_grid.png'
import fundoBallCinza from './../../../public/fundo_ball_cinza.png'
import loaderPokeball from './../../../public/loaderPokeball.gif'
import { headerStateContext } from './context/HeaderContextProvider';

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

export default function Pkdex() {

  const { titulo, setTitulo, posicao, setPosicao, btnVoltar, setBtnVoltar } = headerStateContext()
  
  const [prevPkmn, setPrevPkmn] = useState(loaderPokeball.src);
  const [nextPkmn, setNextPkmn] = useState(loaderPokeball.src);

  const [sprite, setSprite] = useState(loaderPokeball.src);
  const [spritePrev, setSpritePrev] = useState(loaderPokeball.src);
  const [spriteNext, setSpriteNext] = useState(loaderPokeball.src);
  const [shiny, setShiny] = useState(loaderPokeball.src);


  const [bgClass, setBgClass] = useState('bg-red-600')
  const [borderClass, setBorderClass] = useState('border-red-300')

  const searchParams = useSearchParams()
  const num = parseFloat(searchParams.get('num'));

  const { GetPkmn } = useFetch();

  const { data: dataPkmn, error: errorPkmn, isLoading: isLoadingPkmn} = GetPkmn(num);
  const { data: dataPrev, error: errorPrev, isLoading: isLoadingPrev} = GetPkmn(num - 1);
  const { data: dataNext, error: errorNext, isLoading: isLoadingNext} = GetPkmn(num + 1);

  const { GetPkmnList } = useFetch();
  const { data: dataList, error, isLoading} = GetPkmnList();

  // var bgClass, borderClass = '';

  useEffect(() => {
    if(dataPkmn){
      setSprite(dataPkmn.sprites.front_default)
      setShiny(dataPkmn.sprites.front_shiny)
      setBgClass(corClass(dataPkmn.types[0].type.name.toUpperCase()));
      setBorderClass(bordaClass(dataPkmn.types[0].type.name.toUpperCase()));

    } else {
      setSprite(loaderPokeball.src);
      setShiny(loaderPokeball.src);
      
      setBgClass(corClass('bg-red-600'));
      setBorderClass(bordaClass('border-red-300'));
    }

    
  }, [dataPkmn])

  function changeSprite(){
    var temp = shiny;
    setShiny(sprite)
    setSprite(temp);
  }


  if(num > 0 && num <= 151){

    if(errorPkmn) return <div>Não encontrado...</div>
    if(!dataPkmn) return <div>Carregando pkmn...</div>

    setTitulo('INFO')
    setPosicao('left')
    setBtnVoltar(true);


    return (
      <>
        {/* <Header voltar={true} text={"INFO"} position={"left"}/> */}

        <main className=' bg-scroll min-h-screen relative' >
          <div className='hidden sm:block animate-slide absolute w-full h-full z-0 bg-repeat' style={{ background: `url(${fundoGrid.src}) repeat 0 0`}}></div>
          <div className='container mx-auto sm:px-4 pt-5 z-10 relative'>
            <div className='block sm:flex'>

              {/* Sprite */}
              <div className='w-full sm:w-1/3 relative flex'>
                {dataPkmn ? 
                <>
                {/* <div className='absolute inset-0 -z-10 bg-contain bg-center' style={{ background: `url(${fundoBallCinza.src})` }}></div> */}
                <Image src={fundoBallCinza.src} width={300} height={300} className='absolute w-full h-full -z-10 p-4'  />
                <Image onClick={changeSprite} className='mx-auto w-full' src={sprite} alt="Front Default" width={300} height={300}/>
                </>
                :
                <div className='w-full h-full text-gray-400'>
                  <svg className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
                  </svg>
                </div>
                }
                

              </div>

              {/* Dados */}
              <div className='w-full sm:w-2/3'>
                {/* Nome */}
                { dataPkmn ? <Nome cor={bgClass} borda={borderClass} namePkmn={capitalize(dataPkmn.name)} num={pad(num, 3)} prev={dataPrev} isLoadingPrev={isLoadingPrev} next={dataNext} isLoadingNext={isLoadingNext} /> : ''}

                <div className='w-full mt-6 flex'>
                  <div className='hidden sm:block w-full sm:w-1/4 flex-shrink-0  rounded-xl sm:shadow-[8px_8px_rgba(0,0,0,0.3)] bg-white border-4 border-gray-500 relative'>
                    {dataPkmn 
                    ? <>
                      <div className={`h-6 ${bgClass} border-b-4 ${borderClass}`}></div>
                      <Image onClick={changeSprite} alt='Front Shiny' className='mx-auto' width={150} height={150} src={shiny} />
                    </>
                    :
                    
                    <div className='w-full h-full text-gray-400'>
                      <svg className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
                      </svg>
                    </div>
                    }
                  </div>
                  <div className='px-5 sm:px-0 sm:ml-5 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                    { dataPkmn? dataPkmn.types.map((type, index) => <BtnType key={"tp" + index} cor={bgClass} tipo={type.type.name.toUpperCase()} /> ) : ''}
                  </div>
                </div>
              </div>



            </div>
          </div>
        </main>
      </>
    )
  } else {


    if (error) return <div>falhou ao carregar</div>
    if (!dataList) return <div>carregando...s</div>


    setTitulo('POKEDEX')
    setPosicao('center')
    setBtnVoltar(false);


  
    return (
      <>
        {/* <Header text={"POKEDEX"} position={"center"}/> */}

        <main className=" bg-secondary rounded-t-lg my-4 ">
          <div className='border-b border-b-gray-400 py-3'>
            <span className='p-3'>
              Pokemon
            </span>
          </div>
          <div className='pt-3 pb-8  px-4 grid grid-cols-2 gap-4 text-white'>
              <ul>
                
                  { dataList ? dataList.results.map((pokemon, index) => 
                  <Link key={"pkmn" + (index + 1)} href={`/pokedex/?num=${index + 1}`} title={pokemon.name}>
                    <li key={"pkmn" + (index + 1)}>{pokemon.name}</li> 
                  </Link>)
                  : ''}
              </ul>
          </div>
          {/* <Link href="/users">USERS</Link> */}
        </main>
      </>
    )
  }

}
