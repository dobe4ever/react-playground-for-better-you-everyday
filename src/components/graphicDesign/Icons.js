import React, { useState } from 'react';
import {
  PanelTopOpen, Bot, Star, LayoutGrid, LayoutPanelLeft, Calendar, CircleCheckBig, Check, CheckCheck, ChartCandlestick,
  AlarmClockCheck, ListCheck, Pin, SquareCheckBig, SquareCheck, Flame, House, Newspaper, CirclePlus, ListCollapse,
  EyeOff, Bell, User, UserPen, LayoutList, Gem, Rocket, Cross, DiamondPlus, Mail, Wallet, Handshake, SmilePlus,
  PartyPopper, Brain, ThumbsUp, ThumbsDown, NotebookPen, Heart, ListOrdered, Tally1, Tally2, Tally3, Tally4, Tally5,
  Hash, Store, GraduationCap, Mic, SendHorizontal, Bitcoin, Grid3X3, LayoutDashboard, Paperclip, CodeXml, Heading,
  Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, FolderTree, Crown, Maximize2, Minimize2, ToggleLeft,
  ToggleRight, X, TriangleAlert, Clock8, DraftingCompass, Ruler, Proportions, ClipboardCopy, ClipboardPaste, SaveAll,
  SquareStack, MessagesSquare, Copy, Download, SquarePen
} from 'lucide-react';

const IconGrid = ({ icons, bgColor, iconColor }) => (
  <div className={`grid grid-cols-4 gap-4 p-4 rounded-lg ${bgColor}`}>
    {icons.map((Icon, index) => (
      <div key={index} className="flex justify-center items-center h-16">
        <Icon className={`text-3xl stroke-width-0.1px ${iconColor}`} />
      </div>
    ))}
  </div>
);

const Icons = () => {
  const [isIconGridVisible, setIsIconGridVisible] = useState(true);

  const toggleIconGrid = () => {
    setIsIconGridVisible(prevState => !prevState);
  };

  const allicons = [ PanelTopOpen, Bot, Star, LayoutGrid, LayoutPanelLeft, Calendar, CircleCheckBig, Check, CheckCheck,
    ChartCandlestick, AlarmClockCheck, ListCheck, Pin, SquareCheckBig, SquareCheck, Flame, House, Newspaper, CirclePlus,
    ListCollapse, EyeOff, Bell, User, UserPen, LayoutList, Gem, Rocket, Cross, DiamondPlus, Mail, Wallet, Handshake,
    SmilePlus, PartyPopper, Brain, ThumbsUp, ThumbsDown, NotebookPen, Heart, ListOrdered, Tally1, Tally2, Tally3, Tally4,
    Tally5, Hash, Store, GraduationCap, Mic, SendHorizontal, Bitcoin, Grid3X3, LayoutDashboard, Paperclip, CodeXml, Heading,
    Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, FolderTree, Crown, Maximize2, Minimize2, ToggleLeft,
    ToggleRight, X, TriangleAlert, Clock8, DraftingCompass, Ruler, Proportions, ClipboardCopy, ClipboardPaste, SaveAll,
    SquareStack, MessagesSquare, Copy, Download, SquarePen ];
  
  const rowicons = [ Bot, Star, LayoutGrid, LayoutPanelLeft ];

  const IconButton = ({ Icon, inverse }) => (
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

  // Display sections  
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Icons</h1>
        
      {/* All Icons */}
      <div>
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer"
          onClick={toggleIconGrid}
        >
          All Icons
        </h3>
        {isIconGridVisible && (
          <IconGrid icons={allicons} bgColor="bg-white" iconColor="text-orange-main" />
        )}
      </div>
        
      {/* Orange Background */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Orange Background</h3>
        <IconGrid icons={rowicons} bgColor="bg-gradient-orange" iconColor="text-white" />
      </div>

      {/* Icon Buttons */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Icon Buttons</h2>
          
        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">

          {/* White Buttons */}  
          <div className="flex space-x-2">
            <IconButton Icon={Star} />
            <IconButton Icon={LayoutGrid} />
            <IconButton Icon={Calendar} />
          </div>

          {/* Orange Buttons */}
          <div className="flex space-x-2">
            <IconButton Icon={Star} inverse />
            <IconButton Icon={LayoutGrid} inverse />
            <IconButton Icon={Calendar} inverse />
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default Icons;
