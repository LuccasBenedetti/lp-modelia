import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

interface ValuesData {
    id: number
    credits: number
    price: number,
    priceByImage: number
}

const values: ValuesData[] = [
    {
        id: 0,
        credits: 10,
        price: 9,
        priceByImage: 0.90
    },
    {
        id: 1,
        credits: 25,
        price: 21,
        priceByImage: 0.84
    },
    {
        id: 2,
        credits: 50,
        price: 39,
        priceByImage: 0.78
    },
    {
        id: 3,
        credits: 100,
        price: 72,
        priceByImage: 0.72
    },
    {
        id: 4,
        credits: 250,
        price: 165,
        priceByImage: 0.66
    },
    {
        id: 5,
        credits: 500,
        price: 300,
        priceByImage: 0.60
    },
    {
        id: 6,
        credits: 1000,
        price: 540,
        priceByImage: 0.54
    },
]

interface RadioProps {
    onChange: (value: ValuesData) => void
}


export const ProRadio:React.FC<RadioProps> = ({onChange}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<ValuesData>(() => values[0]);

    function handleChange(value: ValuesData) {
        setSelectedValue(value);
        onChange(value);
    }

    return (
        <div className="flex flex-col gap-4 w-full justify-between mt-6">
            {values.map((value, index) =>{
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
                                <span>$ {value.price}</span>
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
                                <span>${value.price}</span>
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