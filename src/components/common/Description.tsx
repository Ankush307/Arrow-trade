import React from 'react'

interface descriptionData {
    text?: string;
    myClass?: string;
}
const Description = ({ myClass, text }: descriptionData) => {
    return (
        <div>
            <p className={`text-[16px] text-white/70 leading-[19.2px] tracking-normal max-sm:text-sm ${myClass}`}> {text}</p>
        </div>
    )
}

export default Description