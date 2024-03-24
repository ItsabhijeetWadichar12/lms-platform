
import React from 'react'

function Enroll({courseDetails}) {
  return (
    <div>
        {
            courseDetails.free?
        
      <div className='mt-5 border rounded-lg p-2 text-center'>
        <h2 className='text-gray-300'>Learn and Build Project , Access </h2>
        <button
        className='p-2 w-full bg-purple-800 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-300'
        >Enroll Now</button>
      </div>
      :
      <div className='mt-5 border rounded-lg p-2 text-center'>
      <h2 className='text-gray-300'>Buy this course, Source code and track your progress </h2>
      <button
      className='p-2 w-full bg-purple-800 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-300'
      >Buy Course for ₹ 500</button>
    </div>
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
