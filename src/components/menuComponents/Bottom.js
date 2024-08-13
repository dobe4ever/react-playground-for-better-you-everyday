// src/components/graphicDesign/Bottom.js
import React from 'react';
import BottomMenu from './BottomMenu';

const Bottom = () => {
  return (
    <div className="space-y-8 p-4">
      <h1 className="text-3xl font-bold">Bottom Horizontal Menu</h1>
      
      <p>A responsive horizontal bottom menu that adjusts the number of visible buttons based on screen size.</p>

      <ul className="list-disc list-inside space-y-2">
        <li>On small screens: 5 buttons</li>
        <li>On medium screens: 7 buttons</li>
        <li>On large screens: 9 buttons</li>
      </ul>

      <div className="h-60 bg-gray-100 flex items-end">
        <BottomMenu />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The 'Add' button is always centered in the menu.</li>
          <li>The 'More' button appears on small and medium screens, revealing additional options when clicked.</li>
          <li>The menu is fully responsive and adjusts automatically to screen size changes.</li>
        </ul>
      </div>
    </div>
  );
};

export default Bottom;