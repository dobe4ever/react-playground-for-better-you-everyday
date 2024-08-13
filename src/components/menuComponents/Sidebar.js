import React from 'react';
import { Star, LayoutGrid, Calendar } from 'lucide-react';

const SidebarButton = ({ Icon, label, active }) => (
  <button
    className={`w-full text-left p-4 flex items-center space-x-2 ${
      active ? 'bg-gradient-white' : ''
    }`}
  >
    <Icon className="stroke-orange-main w-6 h-6" />
    <span>{label}</span>
  </button>
);


// const Icons
const Sidebar = () => {
// Display    
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Sidebar</h1>

      {/* Sidebar Buttons */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Sidebar Buttons</h2>
        <div className="w-64 bg-white shadow-md">
          <SidebarButton Icon={Star} label="Favorites" active />
          <SidebarButton Icon={LayoutGrid} label="Dashboard" />
          <SidebarButton Icon={Calendar} label="Calendar" />
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

export default Sidebar;