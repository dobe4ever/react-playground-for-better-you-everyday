// src/components/mainLayout/MainArea.js
import React, { useState } from 'react';

// Graphic Design
import Logos from '../graphicDesign/Logos';
import Colors from '../graphicDesign/Colors';
import Typography from '../graphicDesign/Typography';
import Icons from '../graphicDesign/Icons';
import AppLayout from '../graphicDesign/AppLayout';
// UI Components
import Buttons from '../uiComponents/Buttons';
import Calendar from '../uiComponents/Calendar';
// Menu Components
import Sidebar from '../menuComponents/Sidebar';
import Contextual from '../menuComponents/Contextual';
import Dropdown from '../menuComponents/Dropdown';
import Bottom from '../menuComponents/Bottom';
// Card Components
import UserCard from '../cardComponents/UserCard'; 
import Habits from '../cardComponents/Habits';  
import Todos from '../cardComponents/Todos';  
// Documentation
import TagCheatsheet from '../documentationComponents/TagCheatsheet.js';
// Main Layout
import Home from './Home';
import SidebarMenu from './SidebarMenu';
import TopBar from './TopBar';

const MainArea = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// Main Area Components
  const components = {
    // Top Bar
    home: Home,
    // Graphic Design
    logos: Logos,    
    colors: Colors,      
    typography: Typography,
    icons: Icons,
    appLayout: AppLayout,
    // UI Components
    buttons: Buttons,
    calendar: Calendar,
    // Menu Components
    sidebar: Sidebar,
    contextual: Contextual,
    dropdown: Dropdown,
    bottom: Bottom,
    // Card Components
    user: UserCard,
    habits: Habits,
    todos: Todos,
    // Documentation Components
    tag: TagCheatsheet,
  };

  const ActiveComponent = components[activeSection];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
      
    <div className="flex h-screen pt-16">
      <SidebarMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-col flex-1">
        <TopBar
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="flex-1 p-8 overflow-auto">
          {ActiveComponent ? <ActiveComponent /> : <p>Select a section from the sidebar</p>}
        </div>
      </div>
    </div>
  );
};

export default MainArea;