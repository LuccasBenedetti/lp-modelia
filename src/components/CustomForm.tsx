import React from "react";

export const CustomForm:React.FC = () => {
    return (
        <div>
            <form action="" className="flex flex-col gap-4 mt-20">
                <div className="grid grid-cols-2 w-full gap-6">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Surname</label>
                        <input type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Business Website</label>
                        <input type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Number of images & videos processed monthly</label>
                        <select className="w-full p-3 rounded-xl border-[1px] border-[#E5E7EB]">
                            <option value="">Please select an option</option>
                            <option value="">0-100</option>
                            <option value="">101-500</option>
                            <option value="">501-1000</option>
                            <option value="">1001-3000</option>      
                            <option value="">3000+</option>      
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Our Services</label>
                        <select className="w-full p-3 rounded-xl border-[1px] border-[#E5E7EB]">
                            <option value="">Please select an option</option>
                            <option value="">0-100</option>
                            <option value="">101-500</option>
                            <option value="">501-1000</option>
                            <option value="">1001-3000</option>      
                            <option value="">3000+</option>      
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Use case</label>
                        <input type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB]"/>
                    </div>
                </div>
               
                <div className="flex flex-col text-xs">
                    <span>
                        By clicking submit, you have read and agreed to our <a href="" className="text-[#5D50FF]">Terms of Use</a> and <a href="" className="text-[#5D50FF]">Privacy Policy</a>
                    </span>
                    <span>
                    By submitting, you agree to receive marketing emails from Vmake. You can opt out at any time by clicking unsubscribe.
                    </span>
                </div>
                
                <button className="h-11 w-full bg-[#0F1729] text-white rounded-xl">Submit my request</button>

            </form>
        </div>
    )
}