import React, { useState } from 'react';
import { IoApps, IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

const ButtonExample = ({ text, className }) => (
  <button className={`mx-2 my-1 ${className}`}>{text}</button>
);

const BrandButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonStyles = [
    { text: 'Primary Button', className: 'bg-orange-500 text-white px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition-all duration-200' },
    { text: 'Secondary Button', className: 'bg-gray-300 text-black px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition-all duration-200' },
    { text: 'Disabled Button', className: 'bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out mb-6">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <IoApps className="text-orange-500 text-xl" />
          <h2 className="text-lg font-semibold">Brand Buttons</h2>
        </div>
        {isExpanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </div>
      {isExpanded && (
        <div className="p-4 bg-gray-50">
          <div className="flex flex-wrap justify-start">
            {buttonStyles.map((button, index) => (
              <ButtonExample key={index} {...button} />
            ))}
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Button styles: Background color #FFA500 (Orange), Text color #FFFFFF (White), 
              Border radius 0.25rem, Padding 0.5rem 1rem
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Hover state: Background color #D3D3D3 (Light Grey), Text color #000000 (Black)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandButtons;