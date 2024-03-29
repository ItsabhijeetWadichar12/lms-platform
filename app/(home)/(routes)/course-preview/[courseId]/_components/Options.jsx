import React from "react";
import Image from 'next/image'
function Options() {
    const optionsList = [
        { 
            id: 1, 
            name: "Github",
            icon:'/social.png'
        },
        { 
            id: 2, 
            name: "Demo",
            icon:'/demo.png'
        }, { 
            id: 3, 
            name: "Youtube",
            icon:'/youtube.png'
        },
];
    return <div className="flex items-center gap-3">
        {optionsList.map((option, index)=>(
            <div key={index} className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer">
                <Image src={option.icon} 
                width={30}
                height={30}
                alt='icons'
                />
                <h2 className="text-[14px] text-gray-200">{option.name}</h2>
            </div>
        ))}
    </div>;
}

export default Options;
