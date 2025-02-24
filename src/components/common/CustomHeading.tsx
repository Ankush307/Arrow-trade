import React from 'react'
interface headingData {
    text?: string;
    textTwo?: string;
    myClass?: string;
}
const CustomHeading = ({ myClass, text,textTwo }: headingData) => {
    return (
        <div>
            <p className={`lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-[58.09px] tracking-normal ${myClass}`}> {text} <span className='text-skyBlue font-semibold'>{textTwo} </span> </p>
        </div>
    )
}

export default CustomHeading