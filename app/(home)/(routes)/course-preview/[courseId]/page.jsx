"use client"

import React from 'react'
import { useEffect } from 'react'

import {getCourseById} from '../../../../_services'


function CoursePreview({params}) {

  // useEffect(() => {
    
  
  //   // console.log(params.courseId);

  //   params.getCourse?getCourse(params.courseId):null;
  // }, [])

  // const getCourse = ()=>{
  //   getCourseById(params.courseId).then(resp=>{
  //     console.log(resp)
  //   })
  // }

  return (
    <div>
      CoursePreview
    </div>
  )
}

export default CoursePreview
