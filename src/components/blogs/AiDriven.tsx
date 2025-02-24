import React from 'react'
import CustomHeading from '../common/CustomHeading'
import Description from '../common/Description'

const AiDriven = () => {
    return (
        <div className='py-[90px]'>
            <div className="max-w-[1140px] mx-auto flex flex-wrap relative max-xl:px-5">
                <div className="">
                    <CustomHeading myClass='max-w-[450px]' text='What are AI-Driven' textTwo='Market Insights?' />
                    <Description myClass='max-w-[655px] pt-4 pb-[30px]' text='AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions.'/>
                    
                </div>
            </div>
        </div>
    )
}

export default AiDriven