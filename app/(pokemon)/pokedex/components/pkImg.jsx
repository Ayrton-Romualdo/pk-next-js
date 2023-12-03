'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'



export default function pkImg({sprite, changeSprite, alter,  largura, altura, classes}) {

  const [img, setImg] = useState(sprite)

  useEffect(() => {
    console.log(sprite)
    setImg(sprite)
  }, [sprite])

  return (
    <>
        <div className={classes} onClick={async () => await changeSprite()}>
            <Image className={classes} src={img} alt={alter} width={largura} height={altura} />
        </div>
    </>
  )
}
