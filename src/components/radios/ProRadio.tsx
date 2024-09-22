import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import {ValuesData, proValues} from '../../utils/prices'

interface RadioProps {
    onChange: (value: ValuesData) => void
    isYearly: boolean
}


export const ProRadio:React.FC<RadioProps> = ({onChange, isYearly}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<ValuesData>(() => proValues[0]);
    
    function handleChange(value: ValuesData) {
        setSelectedValue(value);
        onChange(value);
    }

    return (
        <div className="flex flex-col gap-4 w-full justify-between mt-6">
            {proValues.map((value, index) =>{
                if(isOpen){
                    return (
                        (
                            <div className="flex flex-1 justify-between">
                                <div key={value.id} className="flex items-center gap-2">
                                    <button onClick={() => 
                                        handleChange(value)
                                        } className={`flex items-center justify-center w-4 h-4 rounded-full border-[1px] ${selectedValue.id === value.id ? 'bg-[#5D50FF]' : 'bg-[#F8FAFC]'}`} >
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#F8FAFC]"/>
                                    </button>
                                    <span className="font-bold">{value.credits} Credits</span>
                                    <span className="text-xs">/ Month</span>
                                </div>
                                <span>${isYearly ? value.yearlyPrice : value.price}</span>
                            </div>
                        )
                    )
                }else{
                    if(index < 3){
                        return (
                            <div className="flex flex-1 justify-between">
                                <div key={value.id} className="flex items-center gap-2">
                                    <button onClick={() => handleChange(value)} className={`flex items-center justify-center w-4 h-4 rounded-full border-[1px] ${selectedValue.id === value.id ? 'bg-[#5D50FF]' : 'bg-[#F8FAFC]'}`} >
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#F8FAFC]"/>
                                    </button>
                                    <span className="font-bold">{value.credits} Credits</span>
                                    <span className="text-xs">/ Month</span>
                                </div>
                                <span>${isYearly ? value.yearlyPrice : value.price}</span>
                            </div>
                        )
                    }
                }
            })}

            <div className="flex w-full items-center justify-between mt-2 gap-4">
                <div className="h-[1px] w-max bg-[#E5E7EB] flex-1"/>
                <button className="flex text-sm items-center gap-4 text-[#5D50FF]" onClick={() => setIsOpen(prev => !prev)}> {isOpen ? (
                    <>
                        <span>Collapse</span>
                        <FaChevronUp />
                    </>
                    
                ) : (
                    <>
                        <span>View more</span>
                        <FaChevronDown />
                    </>
                )} </button>
                <div className="h-[1px] w-max bg-[#E5E7EB] flex-1"/>
            </div>
        </div>
    )
}