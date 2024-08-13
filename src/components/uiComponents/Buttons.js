// src/components/graphicDesign/Icons.js
import React from 'react';
import { Star, LayoutGrid, Calendar } from 'lucide-react';

// const IconButton
const IconButton = ({ Icon, inverse }) => (
    <button
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200
        ${inverse
          ? "bg-orange-main active:gradient-white"
          : "bg-white active:gradient-orange"
        }`}
    >
      <Icon className={`w-6 h-6 ${inverse ? "text-white" : "text-orange-main"}`} />
    </button>
  );


// const Icons
const Buttons = () => {
// Display    
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Icons</h1>
        
      {/* Icon Buttons */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Icon Buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex space-x-2">
            <IconButton Icon={Star} />
            <IconButton Icon={LayoutGrid} />
            <IconButton Icon={Calendar} />
          </div>
          <div className="flex space-x-2">
            <IconButton Icon={Star} inverse />
            <IconButton Icon={LayoutGrid} inverse />
            <IconButton Icon={Calendar} inverse />
          </div>
        </div>
      </div>

      {/* Notes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Notes</h2>
        <p className="mb-2">Custom notes...</p>
      </div>
          
    </div>
  );
};

export default Buttons;