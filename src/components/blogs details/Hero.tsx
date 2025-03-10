"use client";
import React from "react";
import Description from "../common/Description";
import Image from "next/image";
import Header from "@/components/common/Header";
import { BLOGS_CARDS } from "@/utils/helper";
import { useParams } from "next/navigation";
import Footer from "../common/Footer";
import AiDriven from "./AiDriven";
import LatestArtical from "../common/LatestArtical";


const Hero = () => {
    const { title } = useParams();

    const blogArray = BLOGS_CARDS.filter(
        (obj) => obj.title.toLowerCase().replace(/\s+/g, "-") === title
    );

    const blog = blogArray.length ? blogArray[0] : null;

    // const blog = BLOGS_CARDS.find(
    //   (obj) => obj.title.toLowerCase().replace(/\s+/g, "-") === title
    // );

    return (
        <div className="pb-[271px]">
            {blog ? (
                <div className="max-w-[1440px] mx-auto relative">
                    <div className="">
                        <Header />
                    </div>
                    <div className="container mt-[91px] max-w-[1140px] mx-auto">
                        <div className="max-w-[481px]">
                            <h2 className="text-[64.09px] max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[121%]">
                                {blog.title}
                                <span className="text-cyan hidden font-semibold max-sm:block"> Market Insights</span>
                            </h2>
                            <Description myClass="mt-4 mb-[30px]" text={blog.description} />
                            <div className="gap-4 items-center flex">
                                <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 border border-solid border-cyan bg-darkGray rounded-[50px] text-sm leading-[150%]">Productivity</button>
                                <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 border border-solid bg-lightBlack border-white rounded-[50px] text-sm leading-[150%]">{blog.readTime}</button>
                                <p className="leading-[150%] font-semibold max-md:text-sm text-white">{blog.date}</p>
                            </div>
                        </div>
                        <Image width={720} height={570} alt="blogs image" src={blog.cardImg} className="xl:absolute h-[570px] object-cover top-0 right-0 -z-10" />
                    </div>
                    <AiDriven />
                    <LatestArtical />
                    <Footer />
                </div>
            ) : ("")}
        </div>
    );
};

export default Hero;
