import React, { useState, useRef, useEffect } from 'react';
import { MenuIcon, PlusIcon, TrashIcon, EditIcon, ShareIcon } from 'lucide-react';

const Contextual = ({ items, triggerClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = triggerRect.bottom;
      let left = triggerRect.left;

      if (top + menuRect.height > viewportHeight) {
        top = triggerRect.top - menuRect.height;
      }

      if (left + menuRect.width > viewportWidth) {
        left = triggerRect.right - menuRect.width;
      }

      menuRef.current.style.top = `${top}px`;
      menuRef.current.style.left = `${left}px`;
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ${triggerClassName}`}
      >
        <MenuIcon className="text-orange-500" />
      </button>
      {isOpen && items && items.length > 0 && (
        <div
          ref={menuRef}
          className="fixed w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden"
          style={{ minWidth: '180px' }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-black"
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.icon && <item.icon className="text-orange-500 mr-2" size={20} />}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage of Contextual
const ExampleContextual = () => {
  const menuItems = [
    { icon: PlusIcon, label: 'Add Item', onClick: () => console.log('Add item clicked') },
    { icon: TrashIcon, label: 'Delete', onClick: () => console.log('Delete clicked') },
    { icon: EditIcon, label: 'Edit', onClick: () => console.log('Edit clicked') },
    { icon: ShareIcon, label: 'Share', onClick: () => console.log('Share clicked') },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contextual Menu Example</h1>
      <p className="mb-4">Click the three dots icon to open the menu:</p>
      <Contextual items={menuItems} triggerClassName="bg-gray-200" />
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Developer Notes:</h2>
        <ul className="list-disc pl-5">
          <li>Import the Contextual component in your file.</li>
          <li>Create an array of menu items, each with icon, label, and onClick properties.</li>
          <li>Pass the items array to the 'items' prop of Contextual.</li>
          <li>Use the 'triggerClassName' prop to add custom classes to the trigger button.</li>
          <li>The menu will automatically position itself to avoid screen edges.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExampleContextual;