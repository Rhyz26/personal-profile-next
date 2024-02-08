import Link from 'next/link'
import React from 'react'

export default function Navbar(){
  return (
    <div className='flex gap-4 justify-center pt-2'>
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/blog">Blog</Link>
    </div>
  )
}
