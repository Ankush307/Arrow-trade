"use client"
import { BLOGS_CARDS } from '@/utils/helper'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomButton from '../common/CustomButton'
import Description from '../common/Description'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const BlogCards = () => {
    const [open, setOpen] = useState(3);
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        const param = searchParams.get("page");
        if (param) {
            setOpen(parseInt(param) * 6);
        }
    }, [searchParams]);

    const allCard = BLOGS_CARDS.slice(0, open).filter(
        (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleShowMore = () => {
        const nextPage = open < BLOGS_CARDS.length ? open / 3 + 1 : 1;
        setOpen(nextPage * 3);
        window.history.pushState(null, "", `?blog/page=${nextPage}`);
    };
    return (
        <div className=' pb-[90px]'>
            <div className="container max-w-[1140px] mx-auto max-xl:px-5">
                <div className="flex items-center justify-start py-[17px] pl-[30px] gap-2.5 border border-white/25 max-w-[558px] mx-auto rounded-full">
                    <label htmlFor="search" className="cursor-pointer">
                        <Image src="/assets/images/svg/search-icon.svg" alt="search-icon" width={18} height={18} className="pointer-events-none" />
                    </label>    
                    <input type="text" id="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="bg-transparent outline-none w-[80%] placeholder:text-white/80 text-white/80 placeholder:leading-6 leading-6" />
                </div>
                <div className="flex flex-wrap gap-x-6 items-center xl:justify-between justify-center pt-[70px]">
                    {allCard.map((item, i) => (
                        <div key={i} className="rounded-[10px] max-w-[364px] mb-6 p-[1px] bg-border">
                            <Link href={`/blogs/${item.title.toLowerCase().replace(/ /g, "-")}`} key={i} >
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
                            </Link >
                        </div>
                    ))}
                </div>
                <div className="!mx-auto mt-10 max-w-[151px]">
                    <CustomButton myOnClick={handleShowMore} myClass='w-full !bg-skyBlue !text-black' text={open < BLOGS_CARDS.length
                        ? "Show all blogs"
                        : "Hide all blogs"
                    } />
                    <div className="flex justify-center items-center pt-10">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogCards