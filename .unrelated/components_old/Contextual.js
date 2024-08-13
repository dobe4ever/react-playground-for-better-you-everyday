import React, { useState, useRef, useEffect } from 'react';
import { MenuIcon } from 'lucide-react';

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

      // Adjust vertical position if menu would go off-screen
      if (top + menuRect.height > viewportHeight) {
        top = triggerRect.top - menuRect.height;
      }

      // Adjust horizontal position if menu would go off-screen
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
      {isOpen && (
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

export default Contextual;