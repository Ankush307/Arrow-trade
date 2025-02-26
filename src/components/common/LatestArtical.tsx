"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { BLOGS_CARDS } from "@/utils/helper";
import { NextArrowIcon, SwiperArrowIcon } from "@/utils/icons";
import CustomHeading from "./CustomHeading";
import Image from "next/image";
import CustomButton from "./CustomButton";

const LatestArticles = () => {
    const BlogCard = BLOGS_CARDS;
    return (
        <div className="px-5 md:pb-[120px] pb-20">
            <CustomHeading myClass="text-center pb-[70px]" text="Latest " textTwo="Articles" />
            <div className="max-w-[1440px] mx-auto relative">
                <div className="container max-w-[1140px] mx-auto">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: ".swiper-next",
                            prevEl: ".swiper-prev",
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: false,
                            },
                            1141: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                                centeredSlides: false,
                            },
                        }}
                        className="mySwiper pb-10">
                        {BlogCard.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative max-w-[364px] max-sm:max-w-[335px] mx-auto border border-skyBlue rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden duration-300 ease-linear hover:shadow-[0px_5px_10px_0px_#71CED0]">
                                    <div className="max-w-[364px] overflow-hidden h-[237px]">
                                        <Image width={364} height={237} className="max-w-[364px] object-cover hover:scale-110 duration-300 ease-linear pointer-events-none" src={item.cardImg} alt="article image" />
                                    </div>
                                    <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6"> {item.date}</p>
                                    <div className="px-5">
                                        <div className="w-full gap-6 flex items-center justify-center -mt-6 relative z-10">
                                            <CustomButton text={item.category} myClass="py-[7px] px-[34.875px] bg-darkBlack text-white shadow-none hover:text-custom-black hover:text-black hover:bg-white rounded-full text-sm leading-[21px] min-w-[154px]" />
                                            <CustomButton text={item.readTime} myClass="py-[7px] px-[34.875px] bg-lightBlack text-white shadow-none rounded-full text-sm leading-[21px] border-white min-w-[154px] hover:text-black hover:bg-white hover:text-custom-light-gray" />
                                        </div>
                                        <h2 className="text-white pt-6 pb-2.5 text-xl font-semibold leading-[24.4px]">{item.title}</h2>
                                        <p className="text-white opacity-70 max-w-[323px] pb-6 text-base leading-6">{item.description}</p>
                                        <div className="w-full flex justify-between items-center">
                                            <div className="flex items-center gap-2.5">
                                                <Image width={50} height={50} className="max-w-[50px] object-cover" src={item.image} alt="author image" />
                                                <p className="text-white text-base font-semibold">{item.author}</p>
                                            </div>
                                            <NextArrowIcon />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center items-center gap-5 my-10">
                        <button className="swiper-prev size-[60px] rotate-180 bg-skyBlue flex justify-center items-center rounded-full xl:absolute top-[45%] xl:-translate-y-1/2 z-10 left-[45px] max-[1400px]:left-0">
                            <SwiperArrowIcon />
                        </button>
                        <button className="swiper-next size-[60px] bg-skyBlue flex justify-center items-center rounded-full xl:absolute right-[45px] top-[45%] xl:-translate-y-1/2 z-20 max-[1400px]:right-0">
                            <span className="">
                                <SwiperArrowIcon />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestArticles;
