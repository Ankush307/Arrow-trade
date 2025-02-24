import React from 'react'
import Header from '../common/Header'
import Description from '../common/Description'

const Hero = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto flex items-center justify-center flex-col">
                <h1 className='text-[64.09px] font-semibold leading-[77.56px] tracking-normal text-center max-w-[718px] pt-[70px]'>Unlock Knowledge with Our <span className='text-skyBlue'>Featured Articles</span></h1>
                <Description myClass='max-w-[674px] text-center pt-4 pb-[30px] ' text='Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.' />
                <div className="flex items-center justify-center gap-4 w-full max-w-[558px] border border-white/25 rounded-[39px] py-[17px] px-[30px] ">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16C9.775 15.9998 11.4989 15.4056 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.4051 11.4997 15.9997 9.77546 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="white" />
                    </svg>
                    <input className='w-full bg-transparent text-white/80 placeholder:text-white/80 outline-none' type="text" placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Hero