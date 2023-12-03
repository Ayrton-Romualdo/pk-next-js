'use client';

import useSWR from 'swr'
import Link from 'next/link'

import React from 'react'

export default function UsersPage() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

    if (error) return <div>falhou ao carregar</div>
    if (isLoading) return <div>carregando...</div>

  return (
    <>
      <Link href="/">Voltar</Link>
      <br />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}
