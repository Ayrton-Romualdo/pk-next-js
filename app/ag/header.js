'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function header() {
  const[theme, setTheme] = useState("coffee");

  const toggleTheme = () => {
    setTheme(theme === "coffee" ? "valentine" : "coffee");
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log(theme);

  }, [theme]);
  return (
    <header className='h-28 mx-auto flex mt-4 bg-secondary px-3 py-2'>
        <div className='w-1/3 flex items-center'>
          <Image className='h-24 w-24' src="https://placehold.co/640" alt="logo" width={640} height={640}/>
        </div>
        <div className='w-1/3 flex items-center text-white font-bold font-serif text-5xl'>
            <Link className='mx-auto' href="/">
                <span className=''>The Barber</span>
            </Link>
        </div>
        <div>
          <button type='button' className='btn btn-primary' onClick={toggleTheme}>
            Mudar tema
          </button>
        </div>
    </header>
  )
}
