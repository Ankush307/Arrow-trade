import React from "react";
import { CHANGING_GAME_HEADING_LIST, CHANGING_GAME_LIST, MARKET_HEADING_LIST, MARKET_INSIGHTS_LIST, } from "@/utils/helper";
import Image from "next/image";
import CustomHeading from "../common/CustomHeading";
import Description from "../common/Description";

const AiDriven = () => {
    return (
        <div className="flex justify-center items-center py-[180px]">
            <div className="flex container relative max-w-[1140px] max-xl:px-5">
                <div className="flex flex-col gap-y-[180px]">
                    <div className="max-w-[655px]">
                        <CustomHeading text={"What are AI-Driven "} textTwo={"Market Insights?"} />
                        <Description myClass="mt-4 mb-[30px]" text={"AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions."} />
                        <div className="flex flex-col gap-y-5">
                            {MARKET_INSIGHTS_LIST.map((item, index) => (
                                <div key={index} className="flex flex-col gap-y-4">
                                    <p className="text-white leading-[150%] font-semibold max-md:text-sm">{item.title}</p>
                                    <Description text={item.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 max-lg:mt-8 max-md:mt-5 max-sm:mt-3 rounded-[10px] bg-aiDriven !p-[1px]">
                        <div className="!bg-darkBlack p-2.5 max-w-[653px] rounded-[10px] w-full h-full">
                            <Image src={"/assets/images/webp/time-analytics.webp"} width={635} height={550} alt="images" className="pointer-events-none max-lg:max-w-[635px]" />
                        </div>
                    </div>
                    <div className="max-w-[655px]">
                        <CustomHeading text={"What are AI-Driven "} textTwo={"Market Insights?"} />
                        <Description myClass="mt-4 mb-[30px]" text={"AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions."} />
                        <div className="flex flex-col gap-y-5">
                            {CHANGING_GAME_LIST.map((item, index) => (
                                <div key={index} className="flex flex-col gap-y-4">
                                    <p className="text-white leading-[150%] font-semibold max-md:text-sm">{item.title}</p>
                                    <Description text={item.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 max-lg:mt-8 max-md:mt-5 max-sm:mt-3 rounded-[10px] bg-aiDriven !p-[1px]">
                        <div className="!bg-darkBlack p-2.5 max-w-[653px] rounded-[10px] w-full h-full">
                            <Image src={"/assets/images/webp/changing-game.webp"} width={635} height={550} alt="images" className="pointer-events-none max-lg:max-w-[635px]" />
                        </div>
                    </div>
                </div>
                <div className="max-w-[485px] w-full flex justify-end">
                    <div className="bg-driven sticky top-5 max-w-[364px] w-full border border-solid border-skyBlue rounded-3xl py-[30px] max-h-[525px]">
                        <div className="flex gap-4 px-5 items-center">
                            <Image src={"/assets/images/webp/features-card-dp-one.webp"} width={80} height={80} alt="profile image" />
                            <p className="font-semibold text-white leading-[150%] max-md:text-sm">Darrell Steward</p>
                        </div>{" "}
                        <div className="flex flex-col px-5  gap-y-4">
                            <p className="font-semibold leading-[121%] mt-6 text-white max-md:text-sm"> What are AI-Driven Market Insights?</p>
                            {MARKET_HEADING_LIST.map((item) => (
                                <p className="text-white/70 leading-[150%] max-md:text-sm">{item}</p>
                            ))}
                        </div>
                        <div className="my-5 h-0.5 bg-white/25 w-full"></div>
                        <div className="flex flex-col px-5  gap-y-4">
                            <p className="font-semibold leading-[121%] text-white max-md:text-sm">How AI-Driven Market Insights Are Changing The Game</p>
                            {CHANGING_GAME_HEADING_LIST.map((item) => (
                                <p className="text-white/70 leading-[150%] max-md:text-sm"> {item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiDriven