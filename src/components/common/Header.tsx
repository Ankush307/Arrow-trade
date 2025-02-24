"use client";
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { DropDownIcon } from "@/utils/icons";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
    });
    return (
        <div className="flex justify-center items-center px-5">
            <div className="container max-lg:px-5 box-border border border-dark border-solid mt-4 bg-white/10 flex justify-center items-center md:rounded-[60px] rounded-3xl py-4 max-w-[1220px]">
                <div className="flex max-w-[1092px] justify-between items-center w-full">
                    <Link href={`/`}>
                        <Image className="lg:w-[150px] lg:h-[44.06px] md:w-[120px] w-[90px]" src="/assets/images/webp/page-logo.webp" width={150} height={44.06} alt="logo" />
                    </Link>
                    <div className={`w-3/4 transition-all duration-300 flex justify-between items-center max-lg:justify-center max-lg:!fixed max-lg:!top-0 max-lg:w-full max-lg:h-screen max-lg:bottom-0 max-lg:flex-col max-lg:gap-6 max-lg:bg-black max-lg:z-40 ${open ? "left-0" : "-left-[120%]"}`} >
                        <div className="flex justify-center max-lg:flex-col gap-6 items-center">
                            {HEADER_LIST.map((item, index) => (
                                <div key={index} className="relative" onMouseEnter={() => item.dropdown && setDropdownOpen(true)} onMouseLeave={() => item.dropdown && setDropdownOpen(false)}>
                                    <Link className={`text-gray leading-[121%] flex items-center relative after:absolute after:transition-all after:duration-300 after:h-[2px] after:w-0 after:bg-skyBlue after:-bottom-1 hover:after:w-full ${item.title === "Blog" && "!text-skyBlue font-bold"}`} href={item.link}>{item.title}{item.dropdown && (
                                        <span className="ml-1"><DropDownIcon /></span>)}
                                    </Link>
                                    {item.dropdown && dropdownOpen && (
                                        <div className="absolute bg-white w-[125px] shadow-lg rounded" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)} >
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link key={subIndex} href={subItem.link} className="block px-4 text-wrap py-2 hover:bg-gray-200 text-black"> {subItem.title}</Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="gap-6 flex max-lg:flex-col">
                            <CustomButton text="Sign Up" myClass="!border !border-skyBlue !border-solid text-skyBlue px-4 hover:bg-skyBlue hover:!text-black hover:!shadow-commonShadow" />
                            <CustomButton text="Login" myClass="!border !border-skyBlue !border-solid text-skyBlue px-[24.5px] hover:bg-skyBlue hover:!text-black hover:!shadow-commonShadow" />
                        </div>
                    </div>
                    <button onClick={() => setOpen(!open)} className="overflow-hidden relative z-50 lg:hidden size-8 gap-[4px] flex flex-col justify-center items-center">
                        <span className={`w-8 h-[5px] transition-all duration-300 bg-white rounded-lg ${open ? "translate-x-10" : ""}`}></span>
                        <span className={`w-8 h-[5px] transition-all duration-300 bg-white rounded-lg relative ${open ? "rotate-45" : ""} ${open ? "after:rotate-90" : ""} after:absolute after:top-0 after:left-0 after:w-8  after:h-[5px] after:bg-white after:rounded-lg`}></span>
                        <span className={`w-8 h-[5px] transition-all duration-300 bg-white rounded-lg ${open ? "-translate-x-10" : ""}`}></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
