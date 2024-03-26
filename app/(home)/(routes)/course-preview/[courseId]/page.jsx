"use client"

import { getCourseById } from '@/app/_services'
import React, { useEffect, useState } from 'react'
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDetails';
import Options from './_components/Options';
import Enroll from './_components/Enroll';
import { useUser } from '@clerk/nextjs';

function CoursePreview({params}) {

  const [courseDetails , setCourseDetails] = useState([]);
  const [userCourse , setUserCourse] = useState([]);

  const {user}= useUser();

  useEffect(()=>{
    console.log(params.courseId)
    params.courseId?getCorse(params.courseId):null;
  },[user])


  const getCorse = ()=>{
    getCourseById(params.courseId , user?.primaryEmailAddress?.emailAddress).then(res=>{
      console.log(res);
      setCourseDetails(res.coursesList);
      setUserCourse(res?.userEnrolls[0]);
    })
  }

  return courseDetails?.name&&(
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

        <div className='col-span-2'>
         {courseDetails?.chapters[0]?
          <VideoPlayer 
          videoUrl={courseDetails?.chapters[0]?.video.url} /> : null
          }

          <CourseDetails courseDetails={courseDetails}/>

        </div>

        <div className='mx-5 md:mt-0'>
          <Options/>
          <Enroll courseDetails={courseDetails}
          userCourse={userCourse}
          />
        </div>


      </div>
    </div>
  )
}

export default CoursePreview
