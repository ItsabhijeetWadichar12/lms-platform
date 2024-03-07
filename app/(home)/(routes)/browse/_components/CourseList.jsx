import React from "react";
import {Image} from 'next/image'
function CourseList({course}) {
  return (
    <div className="mt-5">
     
    {course.map((courses , index)=>(
      <div key={index}>
        <Image src={courses.banner.url}
        alt={}/>
      </div>
    ))}
      
    </div>

    
  );
}

export default CourseList;
