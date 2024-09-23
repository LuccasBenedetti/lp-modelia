import React from "react";
import { z } from 'zod'
import Select, { MultiValue } from 'react-select';
import '../styles/select.css'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';


const multipleOptionsSelect = [
    { value: 'aiModelMannequin', label: 'AI Model - Mannequin', color: '#5243AA' },
    { value: 'aiModelFlatlay', label: 'AI Model - Flatlay', color: '#5243AA' },
    { value: 'aiBackgroundGenerator', label: 'AI Background Generator - Mannequin', color: '#5243AA' },
    { value: 'aiImageExtender', label: 'AI Image Extender', color: '#5243AA' },
    { value: 'videoQualityEnhancer', label: 'Video Quality Enhancer', color: '#5243AA' },
    { value: 'imageQualityEnhancer', label: 'Image Quality Enhancer', color: '#5243AA' },
];

const optionsSelect = [
    { value: 'firstOption', label: '0-100', color: '#5243AA' },
    { value: 'secondOption', label: '101-500', color: '#5243AA' },
    { value: 'thirdOption', label: '501-1000', color: '#5243AA' },
    { value: 'fourthOption', label: '1001-3000', color: '#5243AA' },
    { value: 'fifthOption', label: '3000+', color: '#5243AA' },
];

export const CustomForm:React.FC = () => {

    const formSchema = z.object({
        firstName: z.string().min(1, { message: 'Please enter your first name' }),
        surname: z.string().min(2, { message: 'Please enter your last name' }),
        businessEmail: z.string().min(1,{ message: 'Pelase enter your business email' }).email({ message: 'Invalid email format' }),  
        businessWebsite: z.string().min(1, { message: 'Please enter your business website' }),  
        services: z.array(
            z.object({
              value: z.string(),
              label: z.string(),
              color: z.string(),
            }).nullable()
        ).min(1, { message: 'Please select at least 1 service.' }),
        numberOfImages: z.object({
            value: z.string(),
            label: z.string(),
            color: z.string(),
        }).refine((data) => data.value !== '', { message: 'Please select an option.' }).nullable(),
        useCase: z.string()
    })

    
  const { register, handleSubmit, setValue, formState: { errors }} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      surname: '',
      businessEmail: '',
      businessWebsite: '',
      services: [],
      numberOfImages: {
        color: '',
        label: '',
        value: '',
      },
      useCase: '',
    },
  })

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    const mailtoLink = `mailto:destinatario@example.com?subject=Nova mensagem de ${'sdasd'}&body=Nome: ${'name'}%0AEmail: ${'email'}%0AMensagem: ${'message'}`;

    window.location.href = mailtoLink;
  }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">First Name</label>
                        <input {...register('firstName')} type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB] focus:outline-[#5D50FF]"/>
                        <span className="text-red-500 text-xs">{errors.firstName?.message}</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Surname</label>
                        <input  {...register('surname')} type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB] focus:outline-[#5D50FF]"/>
                        <span className="text-red-500 text-xs">{errors.surname?.message}</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Business Email</label>
                        <input  {...register('businessEmail')} type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB] focus:outline-[#5D50FF]"/>
                        <span className="text-red-500 text-xs">{errors.businessEmail?.message}</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Business Website</label>
                        <input  {...register('businessWebsite')} type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB] focus:outline-[#5D50FF]"/>
                        <span className="text-red-500 text-xs">{errors.businessWebsite?.message}</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Number of images & videos processed monthly</label>
                        <Select
                           options={optionsSelect}
                           classNamePrefix='my-select'
                           onChange={(selectedOption) => setValue('numberOfImages', selectedOption, { shouldValidate: true })}
                        />
                        <span className="text-red-500 text-xs">{errors.numberOfImages?.message}</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Our Services</label>
                        <Select
                           isMulti
                           options={multipleOptionsSelect}
                           classNamePrefix='my-select'
                           onChange={(selectedOptions: MultiValue<{ value: string; label: string; color: string }>) => 
                            setValue('services', Array.from(selectedOptions) || [], { shouldValidate: true })
                          }
                        />
                        <span className="text-red-500 text-xs">{errors.services?.message}</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Use case</label>
                        <input type="text" className="w-full p-2 rounded-xl border-[1px] border-[#E5E7EB] focus:outline-[#5D50FF]"/>
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