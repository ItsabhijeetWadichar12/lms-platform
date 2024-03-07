"use client"

import React from 'react'
import Image from 'next/image'
import {Search , Layout , Shield ,Mail} from 'lucide-react'
import { useState } from 'react';


function SideBarNav() {

  const menuList = [
    {
      id:1,
      name:'Browse',
      icon:Search,
      path:'/browse'
      
    },

    {
      id:2,
      name:'Dashboard',
      icon:Layout,
      path:'/dashboard'
      
    },
    {
      id:3,
      name:'Upgrade',
      icon:Shield,
      path:'/upgrade'
      
    },
    {
      id:4,
      name:'Newsletter',
      icon:Mail,
      path:'/newsletter'
      
    }

  ];

 const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='h-full bg-inherit border-r flex flex-col overflow-y-auto shadow-md'>
      
      <div className='p-5 border-b border-b-black border-red-50'>
      <Image src='/logo.jpg'
      alt='logo'
      width={100}
      height={50}
      />
      </div>

      <div className='flex flex-col'>
        {menuList.map((item , index)=>(
          <div>
            <div className={`flex gap-2 items-center p-4 px-6 text-yellow-50 hover:bg-yellow-500 cursor-pointer
            ${activeIndex==index ?'text-purple-50 bg-purple-500 ':null}`
          }
            onClick={()=>setActiveIndex(index)}
            >
            <item.icon/>
            <h2>{item.name}</h2>
            </div>
            
          </div>
        ))}
      </div>
   
      
    </div>
  )
}

export default SideBarNav
