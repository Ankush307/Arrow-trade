import { BLOGS_CARDS } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import CustomButton from '../common/CustomButton'
import Description from '../common/Description'

const BlogCards = () => {
    return (
        <div className='pt-[70px] pb-[90px]'>
            <div className="container max-w-[1140px] mx-auto max-xl:px-5">
                <div className="flex flex-wrap gap-x-6 items-center xl:justify-between justify-center">
                    {BLOGS_CARDS.map((item, i) => (
                        <div key={i} className="rounded-[10px] max-w-[364px] mb-6 p-[1px] bg-border">
                            <div className="rounded-[10px] md:pb-10 pb-6 bg-darkBlack">
                                <div className="w-full relative">
                                    <Image src={item.cardImg} height={237} width={364} alt='card img' />
                                    <p className='absolute top-5 right-5 text-2xl font-semibold'>{item.date}</p>
                                </div>
                                <div className="flex items-center justify-center px-5 gap-4 -translate-y-6">
                                    <CustomButton myClass='!bg-darkBlack !text-white/80 !text-sm !py-2 md:!px-[34px] px-6' text={item.category} />
                                    <CustomButton myClass='!bg-lightBlack !text-white/80 !text-sm !py-2 md:!px-[40px] px-8 !border-white ' text={item.readTime} />
                                </div>
                                <div className="px-5 ">
                                    <p className='text-xl font-semibold md:pb-2.5 pb-1 max-md:mt-[-8px] '>{item.title}</p>
                                    <Description myClass='md:pb-6 pb-3 max-md:text-sm' text={item.description} />
                                    <div className="flex items-center gap-2.5">
                                        <Image className='rounded-full' src={item.image} height={50} width={50} alt='card img' />
                                        <p>{item.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="!mx-auto mt-10 max-w-[151px]">
                    <CustomButton myClass='w-full !bg-skyBlue !text-black' text='See All Blogs' />
                </div>
            </div>
        </div>
    )
}

export default BlogCards