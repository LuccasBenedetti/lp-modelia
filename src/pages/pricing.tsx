import React, { useState } from "react";

import androidIcon from '../assets/icons/android.svg'
import appleIcon from '../assets/icons/apple.svg'
import apiIcon from '../assets/icons/api.svg'
import webIcon from '../assets/icons/web.svg'

export const Pricing:React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<'standard' | 'custom'>('standard')

    return (
        <div className="flex flex-col">
            <header className="h-16 flex items-center justify-center gap-24">
                <span>img</span>

                <div className="flex gap-6 text-[#6C727F]">
                    <a href="">AI E-commerce</a>
                    <a href="">AI Tools</a>
                    <a href="">Solutions</a>
                    <a href="">Pricing</a>
                    <a href="">Resources</a>
                    <a href="">API</a>
                </div>
                <div className="flex gap-4">
                    <button className="bg-transparent text-[#5D50FF] font-bold">Get in touch</button>
                    <button className="bg-[#0F1729] text-white px-4 py-2 rounded-lg">log in / Sign up</button>
                </div>
            </header>
            <main className="flex flex-col items-center justify-center bg-blue-300">
                <span className="text-[64px] mt-28">CHOOSE YOUR PLAN</span>

                <p className="mt-7 max-w-[740px] text-center text-[#384150]">With AI-powered technologies, Vmake makes it effortless for everyone to create
                professional product photography, dedicated AI clothing models, and build their brands.</p>
            

                <div className="flex mt-6 bg-[#E5E7EB] rounded-lg border-[4px] border-[#E5E7EB]">
                    <button onClick={() => setSelectedOption('standard')} className={`w-[220px] rounded-md h-9 ${selectedOption === 'standard' ? 'bg-white text-[#384150] ' : ''}`}>Standard</button>
                    <button onClick={() => setSelectedOption('custom')} className={`w-[220px] rounded-md h-9 ${selectedOption === 'custom' ? 'bg-white text-[#384150] ' : ''} `}>Custom</button>
                </div>

                <div className="flex gap-6 mt-20">
                    <div className="h-[640px] w-[360px] rounded-3xl bg-white p-8 flex flex-col items-start">
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
                    <div className="relative h-[640px] border-[2px] border-[#5D50FF]  w-[360px] rounded-3xl bg-white p-8 flex flex-col items-start">
                        <div className="absolute top-[-20px] right-[100px] bg-[#5D50FF] rounded-full w-40 h-10 flex items-center justify-center text-white">Most popular</div>
                        <span className="text-2xl font-bold">Pro</span>
                        <span className="text-[#6C727F]">
                            Subscription plan
                        </span>
                        <div className="w-full flex justify-between items-center text-[#6C727F] mt-1">
                            <div className="flex items-center gap-1">
                                <img src={webIcon} alt="" />
                                <span>Web</span>
                            </div>
                            <div className="h-3 w-[1px] bg-[#E5E7EB]"/>
                            <div className="flex items-center gap-1">
                                <img src={appleIcon} alt="" />
                                <span>iOS</span>
                            </div>
                            <div className="h-3 w-[1px] bg-[#E5E7EB]"/>
                            <div className="flex items-center gap-1">
                                <img src={androidIcon} alt="" />
                                <span>Android</span>
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
                        <span className="text-xs text-[#6C727F]">Shared credits for web, mobile apps and API</span>
                    </div>

                    <div className="h-[640px] w-[360px] rounded-3xl bg-white p-8 flex flex-col items-start">
                        <span className="text-2xl font-bold">Flexible</span>
                        <span className="text-[#6C727F]">
                            Pay as you go
                        </span>
                        <div className="w-full flex justify-between items-center text-[#6C727F] mt-1">
                            <div className="flex items-center gap-1">
                                <img src={webIcon} alt="" />
                                <span>Web</span>
                            </div>
                            <div className="h-3 w-[1px] bg-[#E5E7EB]"/>
                            <div className="flex items-center gap-1">
                                <img src={appleIcon} alt="" />
                                <span>iOS</span>
                            </div>
                            <div className="h-3 w-[1px] bg-[#E5E7EB]"/>
                            <div className="flex items-center gap-1">
                                <img src={androidIcon} alt="" />
                                <span>Android</span>
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
                        <span className="text-xs text-[#6C727F]">Shared credits for web, mobile apps and API</span>
                    </div>
                </div>

            </main>
        </div> 
    )
}