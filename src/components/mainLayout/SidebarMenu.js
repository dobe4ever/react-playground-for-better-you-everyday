// src/components/mainLayout/SidebarMenu.js
import React from 'react';
import { FileCode, MoreVertical, Palette, TypeIcon, Images, LayoutIcon, LayoutGridIcon, ShapesIcon, SidebarIcon, MenuIcon, Calendar, PanelBottomDashed, LayoutList, ListCollapse, User } from 'lucide-react';

const SidebarMenu = ({ activeSection, setActiveSection, isOpen, toggleSidebar }) => {
  const sections = [
    { heading: 'Graphic Design', items: [
      { id: 'logos', title: 'Logos', icon: Images },
      { id: 'colors', title: 'Colors', icon: Palette },
      { id: 'typography', title: 'Typography', icon: TypeIcon },
      { id: 'icons', title: 'Icons', icon: ShapesIcon },
      { id: 'appLayout', title: 'App Layout', icon: LayoutIcon },
    ]},
    { heading: 'UI Components', items: [
      { id: 'buttons', title: 'Buttons', icon: LayoutGridIcon }, // IconBtn, SidebarBtn,
      { id: 'calendar', title: 'Calendar', icon: Calendar }, // IconBtn, SidebarBtn,
    ]},
    { heading: 'Menu Components', items: [
      { id: 'sidebar', title: 'Sidebar', icon: SidebarIcon },
      { id: 'contextual', title: 'Contextual', icon: MoreVertical },
      { id: 'dropdown', title: 'Dropdown', icon: MenuIcon },
      { id: 'bottom', title: 'Bottom Nav', icon: PanelBottomDashed },
    ]},
    { heading: 'Card Components', items: [
      { id: 'user', title: 'User', icon: User }, // card front, card back, list  
      { id: 'habits', title: 'Habits', icon: LayoutList }, // card front, card back, list  
      { id: 'todos', title: 'To-Dos', icon: ListCollapse },  // card front, card back, list 
    ]},
    { heading: 'Documentation Components', items: [
      { id: 'tag', title: 'Tag Cheatsheet', icon: FileCode }, // 
    ]},
      
  ];

  return (
    <div className={`bg-white shadow-md transition-all duration-300 h-screen ${isOpen ? 'w-64' : 'w-16'}`}>
      <nav className="h-full overflow-auto">
        {sections.map((section, index) => (
          <div key={index} className={index !== 0 ? 'mt-6' : ''}>
            {isOpen && <h2 className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">{section.heading}</h2>}
            {section.items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left p-4 flex items-center space-x-2 ${
                  activeSection === item.id ? 'bg-gradient-white' : ''
                }`}
              >
                <item.icon className="stroke-orange-main w-icon h-icon" />
                {isOpen && <span>{item.title}</span>}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarMenu;