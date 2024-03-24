import React from 'react'
import {Book} from 'lucide-react'
function CourseDetails({courseDetails}) {
  return (
    <div className='mt-5 p-5 rounded-lg border'>
      <h2 className='text-[20px] font-medium'>
        {courseDetails.name}
      </h2>
      <div className="flex items-center gap-2 mt-2 ">
          
          <Book className='h-6 w-6 text-yellow-500 rounded-full bg-slate-50 p-1'/>
          <h2 className='text-[12px] text-gray-400' >0{courseDetails.totalChapters} Chapters</h2>
        </div>

        <p className='line-clamp-4 mt-5 text-gray-300'>{courseDetails.descriptions}</p>
    </div>
  )
}

export default CourseDetails
