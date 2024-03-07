"use client"

import React ,  { useState }from "react";


function CategoryFilter() {

    const [activeIndex , setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
        id: 2,
        name: "Reactjs",
        value: "reactjs",
      }, {
        id: 3,
        name: "Java",
        value: "java",
      }, {
        id: 4,
        name: "MERN",
        value: "mern",
      }, {
        id: 5,
        name: "PHP",
        value: "php",
      },
  ];
  return <div className="flex gap-5">
    {filterOptions.map((item , index)=>(
        <button key={index} 
        onClick={()=>setActiveIndex(index)}
        className={`border p-2 px-4 text-[12px] rounded-md hover:border-purple-600 hover:bg-yellow-500 ${activeIndex == index ?'border-purple-600 bg-purple-50 text-purple-600':null}`}>
            <h2>{item.name}</h2>

        </button>
    )
    )}
  </div>;
}

export default CategoryFilter;
