import React from 'react'
import Header from '../common/Header'
import Description from '../common/Description'

const Hero = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto flex items-center justify-center flex-col max-xl:px-5">
                <h1 className='lg:text-[64.09px] md:text-5xl sm:text-4xl text-3xl font-semibold lg:leading-[77.56px] tracking-normal text-center max-w-[718px] pt-[70px]'>Unlock Knowledge with Our <span className='text-skyBlue'>Featured Articles</span></h1>
                <Description myClass='max-w-[674px] text-center pt-4 pb-[30px] ' text='Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.' />
            </div>
        </>
    )
}

export default Hero