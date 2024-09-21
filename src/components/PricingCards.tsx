import React, { useState } from "react";
import { FlexibleRadio } from "./radios/FlexibleRadio";
import apiIcon from '../assets/icons/api.svg'
import webIcon from '../assets/icons/web.svg'
import { ProRadio } from "../components/radios/ProRadio";
import { FaChevronDown } from "react-icons/fa";

export const PricingCards:React.FC = () => {
    const [selectedPayment, setSelectedPayment] = useState<'monthly' | 'yearly'>('monthly')

    return (
        <div className="flex gap-6 mt-20">
            <div className="flex flex-col items-center gap-4">
                <div className="min-h-[650px] w-[360px] rounded-3xl bg-white p-8 flex flex-col items-start">
                    <span className="text-2xl font-bold">Hobby</span>
                    <span className="text-[#6C727F]">
                        For Personal or Non-commercial Projects
                    </span>

                    <span className="mt-6 text-2xl font-bold">Free</span>

                    <div className="flex text-[14px] max-w-[250px] text-left mx-auto flex-col mt-5 gap-3 items-start justify-center">
                        <p>Sign up to get 5 free credits</p>
                        <p> Unlimited free image/video processing
                        and preview for non-generative features </p>
                        <p> Unlimited free SD image and video
                        preview downloads </p>
                    </div>

                    <button className="mt-auto h-11 w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">Sign up for Free</button>

                </div>
                <span className="text-xs text-[#384150] text-center max-w-[280px]">Free forever - Recommended for personal use and one-off
                projects</span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="relative min-h-[650px] h-max border-[2px] border-[#5D50FF] w-[360px] rounded-3xl bg-white p-8 flex flex-col items-start">
                    <div className="absolute top-[-20px] right-[100px] bg-[#5D50FF] rounded-full w-40 h-10 flex items-center justify-center text-white">Most popular</div>
                    <span className="text-2xl font-bold">Pro</span>
                    <span className="text-[#6C727F]">
                        Subscription plan
                    </span>
                    <div className="w-full flex justify-start gap-4 items-center text-[#6C727F] mt-1">
                        <div className="flex items-center gap-1">
                            <img src={webIcon} alt="" />
                            <span>Web</span>
                        </div>
                        <div className="h-3 w-[1px] bg-[#E5E7EB]"/>
                        <div className="flex items-center gap-1">
                            <img src={apiIcon} alt="" />
                            <span>API</span>
                        </div>
                    </div>
                    <div className="flex items-end mt-5">
                        <span className="font-bold text-4xl">$0.25</span>
                        <span>/ Credit</span>
                    </div>
                    <span className="text-xs text-[#6C727F]">Shared credits for web and API</span>

                    <div className="flex w-full mt-5">
                        <button onClick={() => setSelectedPayment('monthly')} className={`flex-1 h-10 ${selectedPayment === 'monthly' ? 'border-b-[1px] border-t-[1px] border-t-transparent border-[#384150]' : ''}`}>Pay Monthly</button>
                        <button onClick={() => setSelectedPayment('yearly')}  className={`flex-1 h-10 ${selectedPayment === 'yearly' ? 'border-b-[1px] border-t-[1px] border-t-transparent border-[#384150]' : ''}`}>Pay Yearly <span className="bg-[#EEF2FF] p-1 rounded-lg text-[#5D50FF]">10% off</span></button>
                    </div>

                    <ProRadio />

                    <span className="text-sm text-[#384150] mt-4">Everything in Free +</span>
                    <div className="text-sm text-[#384150] mt-2 flex flex-col gap-2 mx-auto max-w-[220px]">
                        <span>
                            Fixed credit allocation each month
                            (rollover)
                        </span>
                        <span>
                            Download HD images & full-length
                            videos
                        </span>
                    </div>

                    <button className="mt-auto h-11 w-full bg-[#0F1729] text-white rounded-xl">Subscribe now</button>

                </div>
                <span className="text-xs text-[#384150] text-center max-w-[280px]">
                    Choose any tier based on your need every month
                    Rollover credits as long as you're subscribed
                </span>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="min-h-[650px] w-[360px] rounded-3xl bg-white p-8 flex flex-col items-start">
                    <span className="text-2xl font-bold">Flexible</span>
                    <span className="text-[#6C727F]">
                        Pay as you go
                    </span>
                    <div className="w-full flex justify-start gap-4 items-center text-[#6C727F] mt-1">
                        <div className="flex items-center gap-1">
                            <img src={webIcon} alt="" />
                            <span>Web</span>
                        </div>
                        <div className="h-3 w-[1px] bg-[#E5E7EB]"/>
                        <div className="flex items-center gap-1">
                            <img src={apiIcon} alt="" />
                            <span>API</span>
                        </div>
                    </div>
                    <div className="flex items-end mt-5">
                        <span className="font-bold text-4xl">$0.80</span>
                        <span>/ Credit</span>
                    </div>
                    <span className="text-xs text-[#6C727F]">Shared credits for web and API</span>
                    
                    <FlexibleRadio />

                    <span className="text-sm text-[#384150] mt-4">Everything in Free +</span>
                    <div className="text-sm text-[#384150] mt-4 flex flex-col gap-2 mx-auto max-w-[220px]">
                        <span>
                            Fixed credit allocation each month
                            (rollover)
                        </span>
                        <span>
                            Credits valid for 2 years, reactivate
                            anytime
                        </span>
                        <span>
                            Download HD images & full-length
                            videos
                        </span>
                    </div>

                    <button className="mt-auto h-11 w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">Purchase now</button>
                </div>

                <span className="text-xs text-[#384150] text-center max-w-[280px]">
                    One-time purchase to scale your business
                </span>
            </div>
        </div>
    )
}