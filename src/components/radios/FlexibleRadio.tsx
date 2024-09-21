import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

interface ValuesData {
    id: number
    credits: number
    price: number
}


export const FlexibleRadio:React.FC = () => {

    const [selectedRadio, setSelectedRadio] = useState(0)
    const [isOpen, setIsOpen] = useState(false);
    

    const values: ValuesData[] = [
    {
        id: 0,
        credits: 5,
        price: 9.9
    },
    {
        id: 1,
        credits: 10,
        price: 19.9
    },
    {
        id: 2,
        credits: 25,
        price: 43.9
    },
    {
        id: 3,
        credits: 25,
        price: 43.9
    },
    {
        id: 4,
        credits: 25,
        price: 43.9
    },
    {
        id: 5,
        credits: 25,
        price: 43.9
    },
]


    return (
        <div className="flex flex-col gap-4 w-full justify-between mt-6">
            {values.map((value, index) => {
                if(isOpen){
                    return (
                        <div className="flex flex-1 justify-between">
                            <div key={value.id} className="flex items-center gap-2">
                                <button onClick={() => setSelectedRadio(value.id)} className={`flex items-center justify-center w-4 h-4 rounded-full border-[1px] ${selectedRadio === value.id ? 'bg-[#5D50FF]' : 'bg-[#F8FAFC]'}`} >
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#F8FAFC]"/>
                                </button>
                                <span className="font-bold">{value.credits} Credits</span>
                                <span className="text-xs">/ Month</span>
                            </div>
                            <span>$ {value.price}</span>
                        </div>
                    )
                }else {
                    if(index < 3){
                        return (
                            <div className="flex flex-1 justify-between">
                                <div key={value.id} className="flex items-center gap-2">
                                    <button onClick={() => setSelectedRadio(value.id)} className={`flex items-center justify-center w-4 h-4 rounded-full border-[1px] ${selectedRadio === value.id ? 'bg-[#5D50FF]' : 'bg-[#F8FAFC]'}`} >
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#F8FAFC]"/>
                                    </button>
                                    <span className="font-bold">{value.credits} Credits</span>
                                    <span className="text-xs">/ Month</span>
                                </div>
                                <span>$ {value.price}</span>
                            </div>
                        )
                    }
                }
            }
            )}

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