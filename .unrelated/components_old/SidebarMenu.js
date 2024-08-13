import React, { useState } from 'react';
import { IoColorPaletteOutline, IoTextOutline, IoApps, IoMenuOutline, IoShapesOutline } from 'react-icons/io5';
import BrandColorPalette from './BrandColorPalette';
import BrandTypography from './BrandTypography';
import ContextualMenuExample from './ContextualMenuExample';
import ButtonsExample from './ButtonsExample';
import IconsGuide from './IconsGuide';

const SidebarMenu = () => {
  const [activeSection, setActiveSection] = useState('colors');

  const sections = [
    { id: 'colors', title: 'Color Palette', icon: IoColorPaletteOutline, component: BrandColorPalette },
    { id: 'typography', title: 'Typography', icon: IoTextOutline, component: BrandTypography },
    { id: 'buttons', title: 'Buttons', icon: IoApps, component: ButtonsExample },
    { id: 'contextual-menu', title: 'Contextual Menu', icon: IoMenuOutline, component: ContextualMenuExample },
    { id: 'icons', title: 'Icons', icon: IoShapesOutline, component: IconsGuide },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Branding Guide</h1>
        </div>
        <nav>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left p-4 flex items-center space-x-2 hover:bg-gray-100 ${
                activeSection === section.id ? 'bg-gray-200' : ''
              }`}
            >
              <section.icon className="text-orange-500" />
              <span>{section.title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        <h2 className="text-3xl font-bold mb-6">
          {sections.find((s) => s.id === activeSection)?.title}
        </h2>
        {sections.map((section) => (
          <div key={section.id} className={activeSection === section.id ? '' : 'hidden'}>
            <section.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;