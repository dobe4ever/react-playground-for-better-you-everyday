// src/components/mainLayout/TopBar.js
import React from 'react';
import { SidebarIcon, Home, Bell } from 'lucide-react';

const TopBar = ({ toggleSidebar, activeSection, setActiveSection }) => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-200 mr-4"
          aria-label="Toggle sidebar"
        >
          <SidebarIcon className="stroke-orange-main w-6 h-6" />
        </button>
        <button
          onClick={() => setActiveSection('home')}
          className="p-2 rounded-full hover:bg-gray-200 mr-4"
          aria-label="Go to home"
        >
          <Home className="stroke-orange-main w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </h1>
      </div>
      <div className="flex items-center">
        {/* Placeholder for future features */}
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          aria-label="Notifications"
        >
          <Bell className="stroke-orange-main w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;