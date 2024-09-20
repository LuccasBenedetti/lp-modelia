import React, { useState } from "react";


import logo from '../assets/logo.svg'
import { AccordionItem } from "../components/Accordion";
import { PricingCards } from "../components/PricingCards";
import { CustomForm } from "../components/CustomForm";

export const Pricing:React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<'standard' | 'custom'>('standard')
    

    const accordionData = [
        { title: 'What is a credit?', content: 'A credit is...' },
        { title: 'Is there a free trial available for the product?', content: 'Yes, we offer...' },
        { title: 'I\'m a subscriber, how can I change my plan?', content: 'To change your plan...' },
        { title: 'How can I view my invoice?', content: 'You can view your invoice by...' },
        { title: 'What payment methods are supported?', content: 'We support...' },
        { title: 'What is the purpose of the Custom form?', content: 'The custom form allows...' },
        { title: 'Do you offer discounts for NPOs or educational institutions?', content: 'Yes, we provide...' },
        { title: 'How can I unsubscribe?', content: 'To unsubscribe, follow these steps...' },
      ];


    return (
        <div className="flex flex-col">
            <header className="h-16 flex items-center justify-center gap-24">
                <img src={logo} alt="logo" />

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

                <div className="w-full px-24">

                    {selectedOption === 'custom' ? 
                        (
                            <CustomForm/>
                        )
                            :
                        (
                            <PricingCards/>
                        )
                    }

                </div>


                <div className="flex flex-col w-full">
                    <h1 className="text-[40px] mx-auto font-bold mt-10">
                        FAQs about Payment and Pricing 
                    </h1>
                    <div className="w-full px-24 mx-auto">
                        {accordionData.map((item, index) => (
                            <AccordionItem key={index} title={item.title} content={item.content} />
                        ))}
                    </div>
                </div>
            </main>
            <footer className="bg-[#1F1F1F] w-full mx-auto py-6 flex items-center">
                <div className="flex flex-col">
                        <img src={logo} alt="" />
                </div>
            </footer>
        </div> 
    )
}