import { useState } from "react"

interface ValuesData {
    id: number
    credits: number
    price: number
}


export const FlexibleRadio:React.FC = () => {

    const [selectedRadio, setSelectedRadio] = useState(0)
    

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
    }

]


    return (
        <div className="flex flex-col gap-4 w-full justify-between mt-6">
            {values.map((value) => (
                <div className="flex flex-1 justify-between">
                    <div key={value.id} className="flex items-center gap-2">
                        <button onClick={() => setSelectedRadio(value.id)} className={`flex items-center justify-center w-4 h-4 rounded-full border-[1px] ${selectedRadio === value.id ? 'bg-[#5D50FF]' : 'bg-[#F8FAFC]'}`} >
                            <div className="w-[6px] h-[6px] rounded-full bg-[#F8FAFC]"/>
                        </button>
                        <span>{value.credits} Credits</span>
                        <span>/ Month</span>
                    </div>
                    <span>$ {value.price}</span>
                </div>
            ))}
          
        </div>
    )
}