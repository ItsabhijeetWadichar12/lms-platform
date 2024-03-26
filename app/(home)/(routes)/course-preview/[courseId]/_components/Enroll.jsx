
import React from 'react'
import {useUser} from "@clerk/nextjs"
import {useRouter}  from 'next/navigation';

import {EnrollCourse, PublishCourse} from '../../../../../_services'

function Enroll({courseDetails , userCourse}) {

  const {user}= useUser();
  const router = useRouter();

  const enrollCourse=async()=>{
    
    if(user){
     await EnrollCourse(courseDetails.id , user.primaryEmailAddress.emailAddress).then(async(res)=>{
      console.log("enroll course",res);

      if(res){
        await PublishCourse(res?.createUserEnroll?.id).then(result=>{
          console.log(result)
          if(result){
            router.push('/view-course/'+courseDetails.id)
          }
        })
      }
    })

  }else{
    router.push('/sign-in');
  }
  }
  return (
    <div>

      {
        userCourse?.courseId?
        <div className='mt-5 border rounded-lg p-2 text-center'>
        <h2 className='text-gray-300'>Learn and Build Project , Access </h2>
        <button
        className='p-2 w-full bg-purple-800 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-300'
        onClick={()=>router.push('/view-course/'+courseDetails.id)}>Contine</button>
      </div>:null
      }
        {
            courseDetails.free&&!userCourse?.courseId?
        
      <div className='mt-5 border rounded-lg p-2 text-center'>
        <h2 className='text-gray-300'>Learn and Build Project , Access </h2>
        <button
        className='p-2 w-full bg-purple-800 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-300'
        
        onClick={()=>enrollCourse()}>Enroll Now</button>
      </div>
      :
       !userCourse?.courseId?
      <div className='mt-5 border rounded-lg p-2 text-center'>
      <h2 className='text-gray-300'>Buy this course, Source code and track your progress </h2>
      <button
      className='p-2 w-full bg-purple-800 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-300'
      >Buy Course for ₹ 500</button>
    </div>
    :null
    }

<div className='mt-5 border rounded-lg p-2 text-center'>
      <h2 className='text-gray-300'>Buy Monthly Membership and get access to all  Source code and track your progress </h2>
      <button
      className='p-2 w-full bg-purple-800 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-300'
      >Buy Membership ₹ 500/Month </button>
    </div>
    </div>
  )
}

export default Enroll
