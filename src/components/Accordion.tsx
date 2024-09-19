import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type AccordionItemProps = {
  title: string;
  content: string;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        className="w-full flex justify-start gap-6 items-center py-3 text-left focus:outline-none"
        onClick={toggleAccordion}
      > 
       {isOpen ? (
        <FaChevronUp />
      ): 
        <FaChevronDown />
      }
        <span className="font-medium text-gray-800">{title}</span>
        
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

