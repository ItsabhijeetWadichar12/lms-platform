"use client"

import React from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCourseList } from '@/app/_services'
import { useEffect,useState} from 'react'
import CourseList from './_components/CourseList'

function Browse() {

  const [course , setCourse] = useState([]);
  useEffect(() => {
    getCourse()
         
  }, [])
  
  const getCourse = ()=>{
    getCourseList().then(res=>{
      console.log(res);
      setCourse(res.coursesLists);
    })
  }
  return (
    <div>
     <CategoryFilter/>
     {course? <CourseList course={course}/> :null}
    </div>
  )
}

export default Browse
