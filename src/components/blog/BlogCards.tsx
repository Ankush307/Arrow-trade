"use client";
import { BLOGS_CARDS } from "@/utils/helper";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import CustomButton from "../common/CustomButton";
import { NextArrowIcon } from "@/utils/icons";

const BlogCards = () => {
    const [open, setOpen] = useState(6);
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        const param = searchParams.get("page");
        if (param) {
            setOpen(parseInt(param) * 3);
        }

        const query = searchParams.get("search");
        if (query) {
            setSearch(query);
        }
    }, [searchParams]);
    const ArticlesCards = BLOGS_CARDS.slice(0, open).filter(
        (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
    );
    const handleSearchChange = (e: any) => {
        const value = e.target.value;
        setSearch(value);
        window.history.pushState(null, "", `?search=${value}&page`);
    };

    const handleShowMore = () => {
        const nextPage = open < BLOGS_CARDS.length ? open / 3 + 1 : 1;
        NProgress.start();
        setOpen(nextPage * 3);
        window.history.pushState(null, "", `?search=${search}&page=${nextPage}`);
    };

    return (
        <div className="relative">
            <div className="pt-[30px] container mx-auto pb-20  sm:pb-24 md:pb-[180px] max-xl:px-5">
                <div className="flex items-center justify-start py-[17px] pl-[30px] gap-2.5 border border-white border-opacity-25 max-w-[558px] mx-auto rounded-full">
                    <label htmlFor="search" className="cursor-pointer">
                        <Image src="/assets/images/svg/search-icon.svg" alt="search-icon" width={18} height={18} className="pointer-events-none" />
                    </label>
                    <input type="text" id="search" value={search} onChange={handleSearchChange} placeholder="Search" className="bg-transparent outline-none w-full pr-3 placeholder:text-white placeholder:opacity-80 text-white opacity-80 placeholder:leading-6 leading-6" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 max-w-[1140px] mx-auto w-full pt-[70px] relative z-10">
                    {ArticlesCards.length > 0 ? (
                        ArticlesCards.map((obj, i) => (
                            <Link onClick={() => NProgress.start()} href={`/blogs/${obj.title.toLowerCase().replace(/ /g, "-")}`} key={i}>
                                <div className="relative max-w-[364px] max-sm:max-w-[335px] mx-auto border border-skyBlue rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden duration-300 ease-linear hover:shadow-[0px_5px_10px_0px_#71CED0]">
                                    <div className="max-w-[364px] overflow-hidden h-[237px]">
                                        <Image width={364} height={237} className="max-w-[364px] object-cover hover:scale-110 duration-300 ease-linear pointer-events-none" src={obj.cardImg} alt="article image" />
                                    </div>
                                    <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6"> {obj.date}</p>
                                    <div className="px-5">
                                        <div className="w-full gap-6 flex items-center justify-center -mt-6 relative z-10">
                                            <CustomButton text={obj.category} myClass="py-[7px] px-[34.875px] bg-darkBlack text-white shadow-none hover:text-custom-black hover:text-black hover:bg-white rounded-full text-sm leading-[21px] min-w-[154px]" />
                                            <CustomButton text={obj.readTime} myClass="py-[7px] px-[34.875px] bg-lightBlack text-white shadow-none rounded-full text-sm leading-[21px] border-white min-w-[154px] hover:text-black hover:bg-white hover:text-custom-light-gray" />
                                        </div>
                                        <h2 className="text-white pt-6 pb-2.5 text-xl font-semibold leading-[24.4px]">{obj.title}</h2>
                                        <p className="text-white opacity-70 max-w-[323px] pb-6 text-base leading-6">{obj.description}</p>
                                        <div className="w-full flex justify-between items-center">
                                            <div className="flex items-center gap-2.5">
                                                <Image width={50} height={50} className="max-w-[50px] object-cover" src={obj.image} alt="author image" />
                                                <p className="text-white text-base font-semibold">{obj.author}</p>
                                            </div>
                                            <NextArrowIcon />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <h3 className="text-white text-center whitespace-nowrap text-3xl max-sm:text-2xl font-semibold leading-6">Not Matching Blog Found Sorry</h3>
                    )}
                </div>
                <div className="flex justify-center items-center pt-10">
                    <CustomButton myOnClick={handleShowMore}
                        myClass="py-[15px] px-6 border rounded-full !text-black bg-skyBlue text-center"
                        text={open < BLOGS_CARDS.length ? "Show all blogs" : "Hide all blogs"} />
                </div>
            </div>
            {/* <Image src="/assets/images/png/blog-cards-right-shadow.png" alt="shadow" width={237} height={237} className="object-cover absolute bottom-1/3 right-0 w-full max-w-[237px] pointer-events-none" /> */}
        </div>
    );
};

export default BlogCards;
