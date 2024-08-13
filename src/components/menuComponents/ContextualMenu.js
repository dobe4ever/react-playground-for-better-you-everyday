// src/components/menuComponents/ContextualMenu.js
import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';

// Define the ContextualMenu component with props
const ContextualMenu = ({ title, items }) => {
  // Use state to track whether the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Render component
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out mb-6">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <MoreVertical className={`w-5 h-5 transition-transform text-orange-main ${isMenuOpen ? 'rotate-180' : ''}`} />
      </div>

      {isMenuOpen && (
        <div className="p-4 border-t border-gray-200">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
            >
              <item.icon className="w-5 h-5 mr-2 text-orange-main" />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContextualMenu;
