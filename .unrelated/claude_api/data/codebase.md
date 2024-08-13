# Codebase

## src/index.js

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## src/App.js

```
// src/App.js
import React from 'react';
import MainArea from './components/mainLayout/MainArea';

function App() {
  return (
    <div className="App">
      <MainArea />
    </div>
  );
}

export default App;
```

## src/components/mainLayout/TopBar.js

```
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
```

## src/components/mainLayout/SidebarMenu.js

```
// src/components/mainLayout/SidebarMenu.js
import React from 'react';
import { MoreVertical, Palette, TypeIcon, Images, LayoutIcon, LayoutGridIcon, ShapesIcon, SidebarIcon, MenuIcon } from 'lucide-react';

const SidebarMenu = ({ activeSection, setActiveSection, isOpen, toggleSidebar }) => {
  const sections = [
    { heading: 'Graphic Design', items: [
      { id: 'logos', title: 'Logos', icon: Images },
      { id: 'colors', title: 'Colors', icon: Palette },
      { id: 'typography', title: 'Typography', icon: TypeIcon },
      { id: 'icons', title: 'Icons', icon: ShapesIcon },
      { id: 'appLayout', title: 'App Layout', icon: LayoutIcon },
    ]},
    { heading: 'Small Components', items: [
      { id: 'buttons', title: 'Buttons', icon: LayoutGridIcon },
    ]},
    { heading: 'Menu Components', items: [
      { id: 'sidebar', title: 'Sidebar', icon: SidebarIcon },
      { id: 'contextual', title: 'Contextual', icon: MenuIcon },
      { id: 'dropdown', title: 'Dropdown', icon: MoreVertical },
    ]},
    { heading: 'Main Components', items: [] },
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
```

## src/components/mainLayout/MainArea.js

```
// src/components/mainLayout/MainArea.js
import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import TopBar from './TopBar';
import Logos from '../graphicDesign/Logos';
import Colors from '../graphicDesign/Colors';
import Typography from '../graphicDesign/Typography';
import Icons from '../graphicDesign/Icons';
import AppLayout from '../graphicDesign/AppLayout';
import Buttons from '../smallComponents/Buttons';
import Sidebar from '../menuComponents/Sidebar';
import Contextual from '../menuComponents/Contextual';
import Dropdown from '../menuComponents/Dropdown';

const MainArea = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const components = {
    home: () => <div>Welcome to the Branding Guide</div>,
    logos: Logos,
    colors: Colors,
    typography: Typography,
    icons: Icons,
    appLayout: AppLayout,
    buttons: Buttons,
    sidebar: Sidebar,
    contextual: Contextual,
    dropdown: Dropdown,
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
```

## src/components/graphicDesign/AppLayout.js

```
import React from 'react';

const AppLayout = () => {
  return (
    <div>
      <h2>App Layout</h2>
      <p>App layout guidelines will be displayed here.</p>
    </div>
  );
};

export default AppLayout;
```

## src/components/graphicDesign/Logos.js

```
import React from 'react';

const LogoVariant = ({ title, imageSrc, description }) => (
  <div className="bg-gradient-white shadow-md rounded-lg overflow-hidden">
    <div className="bg-gradient-orange text-center py-4 text-4xl text-transparent bg-clip-text">
      {title}
    </div>
    <div className="p-6 flex items-center justify-center">
      <img src={imageSrc} alt={title} className="max-w-full h-auto" />
    </div>
    <p className="mt-4 mb-4 px-6 text-gray-600">{description}</p>
  </div>
);

const Logos = () => {
  // Replace these with your actual logo files
  const logoVariants = [
    {
      title: "MAIN",
      imageSrc: `${process.env.PUBLIC_URL}/assets/primary-logo.svg`,
      description: "The primary logo should be used in most cases."
    },
    {
      title: "SYMBOL",
      imageSrc: `${process.env.PUBLIC_URL}/assets/icon-logos.svg`,
      description: "The logo symbol version is for social profiles, favicons, and 1:1 spaces."
    },
    {
      title: "WIDE",
      imageSrc: `${process.env.PUBLIC_URL}/assets/horizontal-logos.svg`,
      description: "The horizontal layout is suitable for wide spaces like headers."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {logoVariants.map((variant, index) => (
        <LogoVariant key={index} {...variant} />
      ))}
    </div>
  );
};

export default Logos;
```

## src/components/graphicDesign/Home.js

```

```

## src/components/graphicDesign/Colors.js

```
import React from 'react';

const ColorSwatch = ({ name, colorClass, css, hex }) => (
  <div className="flex items-center space-x-4 mb-6">
    <div className={`w-20 h-20 rounded-md shadow-md ${colorClass}`} title={name}></div>
    <div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-black-600 mb-1">CSS: {css}</p>
      <p className="text-sm text-black-600 mb-1">Hex: {hex}</p>
    </div>
  </div>
);

const Colors = () => {
  const colors = [
    { name: 'Orange Main', colorClass: 'bg-orange-main', css: 'bg-orange-main', hex: '#fa4904 ' },
    { name: 'Orange Light', colorClass: 'bg-orange-light', css: 'bg-orange-light', hex: '#fe9f03' },
    { name: 'Gradient Orange', colorClass: 'bg-gradient-orange', css: 'bg-gradient-orange', hex: '#fa4904 to #fe9f03 (45 deg)' },
    { name: 'Gradient White', colorClass: 'bg-gradient-white', css: 'bg-gradient-white', hex: '#fff3e2 to #ffffe2 (45 deg)' },  
  ];

  return (
      
    <div className="space-y-6">
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}

    <div>  
      <div className="bg-gradient-white shadow-md rounded-lg overflow-hidden mt-10">    
      <h1 className="text-3xl font-bold font-sans bg-gradient-orange text-transparent bg-clip-text p-7">Gradient Text On White Background</h1>
    </div>
    </div>
           
    <div>  
      <div className="bg-gradient-orange shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold font-sans text-white p-7">White Text On Gradient Background</h1>
      </div>    
    </div>

    <div>  
      <h1 className="text-3xl font-bold font-sans bg-gradient-orange text-transparent bg-clip-text p-7">Gradient Effect on Text</h1>
    </div>
        
      </div>
  );
};
export default Colors;
```

## src/components/graphicDesign/Typography.js

```
// src/components/graphicDesign/Typography.js
import React from 'react';

const Typography = () => {
  // Helper component for text examples
  const TextExample = ({ text, bgClass, textClass, fontClass }) => (
    <div className={`p-4 ${bgClass} ${textClass} ${fontClass}`}>
      {text}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Typography</h1>

      {/* Font Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Font Examples</h2>
        <div className="grid grid-cols-2 gap-4">
          <TextExample 
            text="Nunito Font (Primary)" 
            bgClass="bg-white" 
            textClass="text-orange-main text-xl"
            fontClass="font-sans"
          />
          <TextExample 
            text="Sans-serif Font (Secondary)" 
            bgClass="bg-white" 
            textClass="text-orange-main text-xl"
            fontClass="font-serif"
          />
        </div>
      </div>

      {/* Text Examples Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Text Examples</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Headings */}
          <TextExample 
            text="Orange Heading" 
            bgClass="bg-white" 
            textClass="text-orange-main text-heading font-bold"
            fontClass="font-sans"
          />
          <TextExample 
            text="White Heading" 
            bgClass="bg-gradient-orange" 
            textClass="text-white text-heading font-bold"
            fontClass="font-sans"
          />

          {/* Subheadings */}
          <TextExample 
            text="Orange Subheading" 
            bgClass="bg-white" 
            textClass="text-orange-main text-title font-semibold"
            fontClass="font-sans"
          />
          <TextExample 
            text="White Subheading" 
            bgClass="bg-gradient-orange" 
            textClass="text-white text-title font-semibold"
            fontClass="font-sans"
          />

          {/* Body Text */}
          <TextExample 
            text="Orange Body Text. This is an example of how body text would look in the primary color on a white background." 
            bgClass="bg-white" 
            textClass="text-orange-main text-base"
            fontClass="font-sans"
          />
          <TextExample 
            text="White Body Text. This is an example of how body text would look in white on the primary color background." 
            bgClass="bg-gradient-orange" 
            textClass="text-white text-base"
            fontClass="font-sans"
          />
        </div>
      </div>

      {/* Additional Typography Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Typography Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Use Nunito as the primary font for most text.</li>
          <li>Sans-serif is used as a fallback and for specific cases where a different font is needed.</li>
          <li>Stick to the defined text sizes: base, large, title, and heading.</li>
          <li>Use appropriate font weights: normal (400) for body, semibold (600) for emphasis, and bold (700) for headings.</li>
          <li>Maintain consistent line heights as defined in the Tailwind config.</li>
        </ul>
      </div>
    </div>
  );
};

export default Typography;
```

## src/components/graphicDesign/Icons.js

```
// src/components/graphicDesign/Icons.js
import React, { useState } from 'react';
import { Star, LayoutGrid, LayoutPanelLeft, Calendar, CircleCheckBig, Check, CheckCheck, ChartCandlestick, AlarmClockCheck, ListCheck, Pin, SquareCheckBig, SquareCheck, Flame, Home, Newspaper, CirclePlus, ListCollapse, EyeOff, Bell, User, UserPen, LayoutList, Gem, Rocket, X as Cross, DiamondPlus, Mail, Wallet, Handshake, SmilePlus, PartyPopper, Brain, ThumbsUp, ThumbsDown, NotebookPen, Heart, ListOrdered, Tally1, Tally2, Tally3, Tally4, Tally5, Hash, Store, GraduationCap, Mic, SendHorizontal, Bitcoin, Grid3X3, LayoutDashboard, Paperclip, CodeXml, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, FolderTree, Crown, Maximize2, Minimize2, ToggleLeft, ToggleRight, X, TriangleAlert, Clock8, DraftingCompass, Ruler, Proportions, ClipboardCopy, ClipboardPaste, SaveAll, SquareStack, MessagesSquare, Copy, Download, SquarePen } from 'lucide-react';

const IconGrid = ({ icons, bgColor, iconColor }) => (
  <div className={`grid grid-cols-4 gap-4 p-4 rounded-lg ${bgColor}`}>
    {icons.map((Icon, index) => (
      <div key={index} className="flex justify-center items-center h-16">
        <Icon className={`text-3xl ${iconColor}`} />
      </div>
    ))}
  </div>
);

const SimpleButton = ({ Icon, inverse }) => (
  <button
    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200
      ${inverse
        ? "bg-orange-main hover:bg-orange-light active:bg-orange-600"
        : "bg-white hover:bg-gray-100 active:bg-gray-200"
      }`}
  >
    <Icon className={`w-6 h-6 ${inverse ? "text-white" : "text-orange-main"}`} />
  </button>
);

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

const BottomBarButton = ({ Icon, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-1">
      <Icon className="w-6 h-6 text-orange-main" />
    </div>
    <span className="text-xs text-white">{label}</span>
  </div>
);

const Icons = () => {
  const [showAllIcons, setShowAllIcons] = useState(false);

  const allIcons = [
    Star, LayoutGrid, LayoutPanelLeft, Calendar, CircleCheckBig, Check, CheckCheck, ChartCandlestick, AlarmClockCheck, ListCheck, Pin, SquareCheckBig, SquareCheck, Flame, Home, Newspaper, CirclePlus, ListCollapse, EyeOff, Bell, User, UserPen, LayoutList, Gem, Rocket, Cross, DiamondPlus, Mail, Wallet, Handshake, SmilePlus, PartyPopper, Brain, ThumbsUp, ThumbsDown, NotebookPen, Heart, ListOrdered, Tally1, Tally2, Tally3, Tally4, Tally5, Hash, Store, GraduationCap, Mic, SendHorizontal, Bitcoin, Grid3X3, LayoutDashboard, Paperclip, CodeXml, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, FolderTree, Crown, Maximize2, Minimize2, ToggleLeft, ToggleRight, X, TriangleAlert, Clock8, DraftingCompass, Ruler, Proportions, ClipboardCopy, ClipboardPaste, SaveAll, SquareStack, MessagesSquare, Copy, Download, SquarePen
  ];

    
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Icons</h1>

      {/* All Icons */}
      <div>
        <h2 className="text-xl font-semibold mb-2">All Icons</h2>
        <button
          onClick={() => setShowAllIcons(!showAllIcons)}
          className="mb-4 px-4 py-2 bg-orange-main text-white rounded-md hover:bg-orange-light transition-colors duration-200"
        >
          {showAllIcons ? 'Hide All Icons' : 'Show All Icons'}
        </button>
        {showAllIcons && <IconGrid icons={allIcons} bgColor="bg-white" iconColor="text-orange-main" />}
      </div>
        
      {/* Add Button */}
      <div>
        <h2 className="text-xl font-semibold mb-2">The Add Button</h2>
        <div className="bg-orange-main p-4 rounded-lg flex justify-between items-center">
          <SimpleButton Icon={CirclePlus} />
          </div>
       </div> 
        
      {/* Simple Buttons */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Simple Buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex space-x-2">
            <SimpleButton Icon={Star} />
            <SimpleButton Icon={LayoutGrid} />
            <SimpleButton Icon={Calendar} />
          </div>
          <div className="flex space-x-2">
            <SimpleButton Icon={Star} inverse />
            <SimpleButton Icon={LayoutGrid} inverse />
            <SimpleButton Icon={Calendar} inverse />
          </div>
        </div>
      </div>

      {/* Sidebar Buttons */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Sidebar Buttons</h2>
        <div className="w-64 bg-white shadow-md">
          <SidebarButton Icon={Star} label="Favorites" active />
          <SidebarButton Icon={LayoutGrid} label="Dashboard" />
          <SidebarButton Icon={Calendar} label="Calendar" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Bottom Bar</h2>
        <div className="bg-orange-main p-4 rounded-lg flex justify-between items-center">
          <BottomBarButton Icon={Home} label="Home" />
          <BottomBarButton Icon={Star} label="Favorites" />
          <BottomBarButton Icon={LayoutGrid} label="Dashboard" />
          <BottomBarButton Icon={Calendar} label="Calendar" />
          <BottomBarButton Icon={User} label="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Icons;
```

## src/components/smallComponents/Buttons.js

```
import React from 'react';
import IconButton from './IconButton';
import { IoAddOutline, IoTrashOutline, IoPencilOutline, IoShareOutline } from 'react-icons/io5';

const Buttons = () => {
  const handleClick = (action) => {
    console.log(`${action} button clicked`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Icon Buttons</h2>
        <div className="flex space-x-4">
          <IconButton icon={IoAddOutline} onClick={() => handleClick('Add')} ariaLabel="Add item" />
          <IconButton icon={IoTrashOutline} onClick={() => handleClick('Delete')} ariaLabel="Delete item" />
          <IconButton icon={IoPencilOutline} onClick={() => handleClick('Edit')} ariaLabel="Edit item" />
          <IconButton icon={IoShareOutline} onClick={() => handleClick('Share')} ariaLabel="Share item" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Inverse Icon Buttons</h2>
        <div className="flex space-x-4">
          <IconButton icon={IoAddOutline} onClick={() => handleClick('Add')} inverse ariaLabel="Add item" />
          <IconButton icon={IoTrashOutline} onClick={() => handleClick('Delete')} inverse ariaLabel="Delete item" />
          <IconButton icon={IoPencilOutline} onClick={() => handleClick('Edit')} inverse ariaLabel="Edit item" />
          <IconButton icon={IoShareOutline} onClick={() => handleClick('Share')} inverse ariaLabel="Share item" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Different Sizes</h2>
        <div className="flex items-center space-x-4">
          <IconButton icon={IoAddOutline} onClick={() => handleClick('Add Small')} size="small" ariaLabel="Add item (small)" />
          <IconButton icon={IoAddOutline} onClick={() => handleClick('Add Medium')} size="medium" ariaLabel="Add item (medium)" />
          <IconButton icon={IoAddOutline} onClick={() => handleClick('Add Large')} size="large" ariaLabel="Add item (large)" />
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Developer Notes:</h2>
        <ul className="list-disc pl-5">
          <li>Import the IconButton component and desired icons.</li>
          <li>Use the 'icon' prop to specify which icon to display.</li>
          <li>The 'onClick' prop is required and should be a function.</li>
          <li>Use 'inverse' prop for orange background and white icon.</li>
          <li>The 'size' prop accepts 'small', 'medium', or 'large'.</li>
          <li>Additional classes can be passed via the 'className' prop.</li>
          <li>Always provide an 'ariaLabel' for accessibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default Buttons;
```

## src/components/smallComponents/IconButton.js

```
// IconButton.js
import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ 
  icon: Icon,
  onClick,
  inverse = false,
  size = 'medium',
  className = '',
  ariaLabel
}) => {
  const sizeClasses = {
    small: 'p-1',
    medium: 'p-2',
    large: 'p-3'
  };

  const baseClasses = `
    rounded-full
    transition-colors
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-orange-500
    ${sizeClasses[size]}
  `;

  const colorClasses = inverse
    ? 'bg-orange-500 text-white hover:bg-orange-600'
    : 'bg-white text-orange-500 hover:bg-gray-100';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${className}`}
      aria-label={ariaLabel}
    >
      <Icon className={size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'} />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired
};

export default IconButton;
```

## src/components/menuComponents/Sidebar.js

```
import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <p>Sidebar component guidelines will be displayed here.</p>
    </div>
  );
};

export default Sidebar;
```

## src/components/menuComponents/Dropdown.js

```
import React from 'react';

const Dropdown = () => {
  return (
    <div>
      <h2>Dropdown</h2>
      <p>Dropdown menu guidelines will be displayed here.</p>
    </div>
  );
};

export default Dropdown;
```

## src/components/menuComponents/Contextual.js

```
import React, { useState } from 'react';
import { MenuIcon, PlusIcon, TrashIcon, EditIcon, ShareIcon } from 'lucide-react';

// Define the ContextualMenuGuide component
const ContextualMenuGuide = () => {
  // Use state to track whether the menu is expanded and if the contextual menu is open
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the menu items with their corresponding icons and text
  const menuItems = [
    { icon: PlusIcon, text: 'Add Item' },
    { icon: TrashIcon, text: 'Delete' },
    { icon: EditIcon, text: 'Edit' },
    { icon: ShareIcon, text: 'Share' },
  ];

  // Define the icon sizes for different display purposes
  const iconSizes = {
    small: 16,
    medium: 24,
    large: 32
  };

  // Render the component
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out mb-6">
      {/* Header section: Displays the title and a toggle button to expand/collapse the content */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <MenuIcon className="text-orange-500 text-xl" />
          <h2 className="text-lg font-semibold">Contextual Menu & Icon Guide</h2>
        </div>
        {isExpanded ? <MenuIcon /> : <MenuIcon />}
      </div>

      {/* Expanded content section: Displays the contextual menu and icon guide */}
      {isExpanded && (
        <div className="p-4 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Contextual Menu</h3>
          <div className="relative inline-block">
            {/* Contextual menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition-colors duration-200"
            >
              <MenuIcon className="text-orange-500" />
            </button>
            {/* Contextual menu items */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <item.icon className="text-orange-500 mr-2" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Menu Style: White background, black text, orange icons, grey hover effect
            </p>
            <p className="text-sm text-gray-600">
              Rounded corners, flat design (no shadows), blur background on open
            </p>
          </div>
          <h3 className="text-lg font-semibold mt-6 mb-2">Icon Guide</h3>
          <div className="space-y-4">
            {/* Display the different icon sizes */}
            {Object.entries(iconSizes).map(([size, value]) => (
              <div key={size} className="flex items-center space-x-4">
                <PlusIcon size={value} className="text-orange-500" />
                <span className="text-sm">
                  {size.charAt(0).toUpperCase() + size.slice(1)} Icon: {value}px
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Icon Style: Outline, consistent color (orange #FFA500)
          </p>
        </div>
      )}
    </div>
  );
};

// Export the ContextualMenuGuide component
export default ContextualMenuGuide;
```

## public/out.css

```
/*
! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.m-5 {
  margin: 1.25rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-6 {
  margin-top: 1.5rem;
}

.flex {
  display: flex;
}

.h-12 {
  height: 3rem;
}

.w-full {
  width: 100%;
}

.max-w-5xl {
  max-width: 64rem;
}

.max-w-3xl {
  max-width: 48rem;
}

.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.pt-20 {
  padding-top: 5rem;
}

.pb-3 {
  padding-bottom: 0.75rem;
}

.pt-4 {
  padding-top: 1rem;
}

.text-center {
  text-align: center;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-extrabold {
  font-weight: 800;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}

.text-sky-500 {
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
}

.text-slate-600 {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\:bg-slate-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-slate-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(148 163 184 / var(--tw-ring-opacity));
}

.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus\:ring-offset-slate-50:focus {
  --tw-ring-offset-color: #f8fafc;
}

@media (prefers-color-scheme: dark) {
  .dark\:bg-sky-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(14 165 233 / var(--tw-bg-opacity));
  }

  .dark\:text-slate-400 {
    --tw-text-opacity: 1;
    color: rgb(148 163 184 / var(--tw-text-opacity));
  }

  .dark\:text-sky-400 {
    --tw-text-opacity: 1;
    color: rgb(56 189 248 / var(--tw-text-opacity));
  }

  .dark\:hover\:bg-sky-400:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(56 189 248 / var(--tw-bg-opacity));
  }
}

@media (min-width: 640px) {
  .sm\:w-auto {
    width: auto;
  }

  .sm\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }
}

@media (min-width: 1024px) {
  .lg\:pt-32 {
    padding-top: 8rem;
  }

  .lg\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
}
```

## public/index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React Component Playground</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">  
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

## pages/index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="out.css">
  <title>Tailwind CSS</title>
</head>
<body class="bg-slate-900 flex justify-center">
  <div class="max-w-5xl pt-20 lg:pt-32 mx-2">
    <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl pb-3 text-sky-500 tracking-tight text-center">Rapidly build modern websites without ever leaving your HTML.</h1>
    <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
      A utility-first CSS framework packed with classes like 
      <code class="font-mono font-medium text-sky-500 dark:text-sky-400">flex</code>, 
      <code class="font-mono font-medium text-sky-500 dark:text-sky-400">pt-4</code>, 
      <code class="font-mono font-medium text-sky-500 dark:text-sky-400">text-center</code> and 
      <code class="font-mono font-medium text-sky-500 dark:text-sky-400">rotate-90</code> that can be composed to build any design, directly in your markup. Now in replit!
    </p>
    <div class="w-full flex justify-center">
        <a href="https://tailwindcss.com/docs/utility-first" class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 m-5 flex" target="_blank">
        Visit the documentation
      </a>
    </div>
    
  </div>
  
</body>
</html>
```

## tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js}"  
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'orange': {
          'main': '#ea580c',
          'light': '#fe9f03',
        },
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(45deg, #ea580c, #fe9f03)',
        'gradient-white': 'linear-gradient(45deg, #fff3e2, #ffffe2)',
      },
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
      fontSize: {
        'small': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'large': ['1.25rem', { lineHeight: '1.75rem' }],
        'title': ['1.5rem', { lineHeight: '2rem' }],
        'heading': ['2rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        'tight': '0.5rem',
        'base': '1rem',
        'relaxed': '1.5rem',
        'loose': '2rem',
      },
      borderRadius: {
        'brand': '0.375rem',
      },
    },
  },
  plugins: [],
}
```

## input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Add to input.css */
@layer utilities {
  .transition-sidebar {
    transition-property: width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}
```

## package.json

```
{
  "name": "my-react-playground",
  "version": "0.1.0",
  "private": true,
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^18.17.0",
    "express": "^4.18.2",
    "lucide-react": "^0.424.0",
    "node-fetch": "^3.2.6",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.2.1",
    "react-router-dom": "^6.26.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.9"
  }
}

```

