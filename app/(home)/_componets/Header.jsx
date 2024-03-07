"use client"

import React from 'react'
import SearchBar from './SearchBar'
import {UserButton, useUser  } from '@clerk/nextjs'

import {useEffect} from 'react'
import { useRouter } from 'next/navigation'


function Header() {

 const {user} = useUser();

 const router = useRouter();
 useEffect(() => {
   
 
   return () => {
    console.log(user)
   }
 }, [user])
 
    
  return (
    <div className='ml-64 p-5 border-b flex items-center justify-between'>
        <SearchBar/>
        <div>

        </div>
        {!user?<button onClick={()=>router.push('/sign-in')}>Login </button>:
      <UserButton/>}
         
      
    </div>
  )
}

export default Header
