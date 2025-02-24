import { FOOTER_ICONS_LIST, FOOTER_LINKS_LIST, TRADE_RESPONSIBILITY_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Description from "./Description";

const Footer = () => {

    return (
        <div className="bg-footer bg-cover bg-no-repeat pt-[60px] max-sm:pt-12 ">
            <div className="container max-w-[1140px] mx-auto flex flex-col max-xl:px-5">
                <Link href="/"><Image src="/assets/images/webp/page-logo.webp" width={152} height={44} alt="logo" /></Link>
                <div className="flex sm:gap-6 items-center flex-wrap gap-y-2 sm:px-2.5 max-lg:py-8 max-sm:py-3 py-[40px]">
                    {FOOTER_LINKS_LIST.map((item, index) => (
                        <Link key={index} className="leading-[150%] max-sm:w-1/3 whitespace-nowrap max-md:text-sm font-semibold text-white hover:text-skyBlue transition-all duration-300 hover:scale-105" href={item.link} >{item.title}</Link>
                    ))}
                </div>
                <div className="flex justify-center gap-y-[30px] max-md:gap-y-4 max-sm:gap-y-3 flex-col">
                    {TRADE_RESPONSIBILITY_LIST.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <p className="text-white leading-[150%] font-semibold max-md:text-sm pb-2.5">{item.title}</p>
                            <Description text={item.description} />
                            <Description myClass={`${index === 3 ? "block" : "hidden"} pt-2.5`} text={item.descriptionTwo} />
                        </div>
                    ))}
                </div>
                <div className="md:pt-[50px] md:pb-[80px] sm:pt-10 sm:pb-16 pb-12 pt-8 flex items-center gap-6">
                    {FOOTER_ICONS_LIST.map((item, index) => (
                        <Link key={index} href={item.link} target="_blank"><Image className="pointer-events-none max-md:size-7 size-10" key={index} src={item.icons} width={40} height={40} alt="icons" /></Link>
                    ))}
                </div>
            </div>
            <div className="border-t border-white/20 py-4">
                <p className="text-white/80 text-center max-sm:text-sm">Copyright © {new Date().getFullYear()} ArrowTrade. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
