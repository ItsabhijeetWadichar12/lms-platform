import React, { useEffect, useState } from 'react'
import {PlayCircle , PauseCircle} from 'lucide-react'
function ChapterNav({course , userCourse , setActiveChapter}) {

    const [activeIndex , setActiveIndex] = useState(0);
    useEffect(()=>{
        setActiveChapter(course?.chapters[0])
    },[])
  return (
    <div>
      <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>{course.name}</h2>
        <h2 className='text-gray-400 text-[16px]'>By {course.auther}</h2>
      </div>
      
      <div>
       {course.chapters?.map((chapter , index )=>(
        <div key={index} 
        onClick={()=>{setActiveIndex(index);
        setActiveChapter(chapter)
        }}
        className={`flex gap-2 text-[16px] p-5 text-gray-200 cursor-pointer hover:bg-purple-600
        ${activeIndex == index?'bg-green-800 text-gray-200':null}
        `}>
           {activeIndex == index?<PauseCircle/> : <PlayCircle/>}
            <h2>{chapter.name}</h2>
        </div>
       ))}
      </div>
    </div>
  )
}

export default ChapterNav
