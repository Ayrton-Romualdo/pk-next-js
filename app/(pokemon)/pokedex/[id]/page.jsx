import React from 'react'
import Image from 'next/image'

import Header from './../components/header'
import Nome from './../components/nome'
import BtnType from './../components/btnType'
import PkImg from './../components/pkImg'
import PkSprite from './../components/pkSprite'


// scripts
import {corClass, bordaClass} from './../../functions/pickClass.js'

// imagens
import fundoGrid from './../../../../public/fundo_grid.png'
import fundoBallCinza from './../../../../public/fundo_ball_cinza.png'
import loaderPokeball from './../../../../public/loaderPokeball.gif'



function capitalize(text){
  const priLetra = text.charAt(0);
  const priLetraCap = priLetra.toUpperCase();

  const resto = text.slice(1);

  return priLetraCap + resto;
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}




export default async function Pkmn({params}) {
  
    
    var num = parseFloat(params.id)

    const res = await fetch('http://localhost:3000/pokedex/api/' + num);
    const resNext = await fetch('http://localhost:3000/pokedex/api/' + parseFloat(num + 1));
    
    console.log(num)
    
    let resPrev = null;
    let dataPrev = null;

    if(num > 1){
      resPrev = await fetch('http://localhost:3000/pokedex/api/' + parseFloat(num - 1))
      dataPrev = await resPrev.json();
    }

    const dataPkmn = await res.json();
    const dataNext = await resNext.json();

    var sprite = await dataPkmn.sprites.front_default
    var shiny = await dataPkmn.sprites.front_shiny

    const bgClass = await corClass(dataPkmn.types[0].type.name.toUpperCase());
    const borderClass = await bordaClass(dataPkmn.types[0].type.name.toUpperCase());

    const changeSprite = async () =>{
      "use server"
      var temp = dataPkmn.sprites.front_default;
      dataPkmn.sprites.front_default = dataPkmn.sprites.front_shiny;
      dataPkmn.sprites.front_shiny = temp;

      console.log(dataPkmn.sprites.front_default)
      console.log(dataPkmn.sprites.front_shiny)
    }

    return (
      <>
        {/* <Header /> */}
        <Header btnVoltar={true} titulo={"INFO"} posicao={"left"}/>

        <main className=' bg-scroll min-h-screen relative' >
          <div className='hidden sm:block animate-slide absolute w-full h-full z-0 bg-repeat' style={{ background: `url(${fundoGrid.src}) repeat 0 0`}}></div>
          <div className='container mx-auto sm:px-4 pt-5 z-10 relative'>
            <div className='block sm:flex'>

              {/* Sprite */}
              <PkSprite dataPkmn={dataPkmn} cor={bgClass} borda={borderClass} sprite={sprite} shiny={shiny}  />
              {/* <div className='w-full sm:w-1/3 relative flex'>
                {dataPkmn ? 
                <>
                  <Image alt='fundo cinza' src={fundoBallCinza.src} width={300} height={300} className='absolute w-full h-full -z-10 p-4'  />

                  <PkImg sprite={sprite} changeSprite={changeSprite} classes={'mx-auto w-full'} alter={'Front Default'} largura={300} altura={300} />
                </>
                :
                <div className='w-full h-full text-gray-400'>
                  <svg className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
                  </svg>
                </div>
                }
                

              </div> */}

              {/* Dados */}
              <div className='w-full sm:w-3/5'>
                {/* Nome */}
                { dataPkmn ? <Nome cor={bgClass} borda={borderClass} namePkmn={capitalize(dataPkmn.name)} num={pad(num, 3)} prev={dataPrev} next={dataNext} /> : ''}

                <div className='w-full mt-6 flex'>
                  {/* <div className='hidden sm:block w-full sm:w-1/4 flex-shrink-0  rounded-xl sm:shadow-[8px_8px_rgba(0,0,0,0.3)] bg-white border-4 border-gray-500 relative'>
                    {dataPkmn 
                    ? <>
                      <div className={`h-6 ${bgClass} border-b-4 ${borderClass}`}></div>
                      <Image alt='Front Shiny' className='mx-auto' width={150} height={150} src={shiny} />
                    </>
                    :
                    
                    <div className='w-full h-full text-gray-400'>
                      <svg className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
                      </svg>
                    </div>
                    }
                  </div> */}
                  <div className='px-5 sm:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                    { dataPkmn ? dataPkmn.types.map((type, index) => <BtnType key={"tp" + index} cor={bgClass} tipo={type.type.name.toUpperCase()} /> ) : ''}
                  </div>
                </div>
              </div>



            </div>
          </div>
        </main>
      </>
    )
}


