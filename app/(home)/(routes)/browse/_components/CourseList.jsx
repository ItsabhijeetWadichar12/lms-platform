import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import {Book} from 'lucide-react'
function CourseList({course}) {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
     
    {course.map((courses , index)=>(
    <Link href={'/course-preview/'+courses.id}>
      <div key={index} className='border rounded-lg p-2 cursor-pointer hover:border-purple-600'
      
      >
        <Image src={courses.banner.url}
        alt={courses.name}
        width={1000}
        height={500}
        />

        <div className='mt-2'>
          <h2 className='text-[18px] md:text-[16px] font-medium text-white'>{courses.name}</h2>
          <h2 className='text-gray-400 text-[13px]'>By {courses.auther}</h2>


        <div className="flex items-center gap-2 mt-2 ">
          
          <Book className='h-6 w-6 text-yellow-500 rounded-full bg-slate-50 p-1'/>
          <h2 className='text-[12px] text-gray-400' >0{courses.totalChapters} Chapters</h2>
        </div>
        <h2 className='text-[14px] text-white '>{courses.free?'Free':'Paid'}</h2>
        </div>

        
      </div>

      </Link>
      
    ))}
      
    </div>
    

    
  );
}

export default CourseList;
