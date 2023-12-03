import React from 'react'
import Header from './header'

export default function AgLayout({children}) {
  return (
    <>
    <div className='px-4'>
      <Header />
      {children}
    </div>
    </>
  )
}
