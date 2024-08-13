// src/components/graphicDesign/BottomMenu.js
import React, { useState, useEffect, useMemo } from 'react';
import { LayoutGrid, Home, Newspaper, CirclePlus, Bot, Calendar, BarChart2, Users, Briefcase, GraduationCap } from 'lucide-react';

const AddButton = ({ size = 50, protrusion = 50 }) => {
  const circleSize = size + 5;
  return (
    <button
      className="relative flex items-center justify-center"
      style={{
        width: circleSize,
        height: circleSize,
        transform: `translateY(-${protrusion}%)`,
        borderRadius: '50%',
      }}
      aria-label="Add new item"
    >
      <div
        className="absolute inset-0 flex items-center justify-center rounded-full bg-white"
        style={{
          width: circleSize,
          height: circleSize,
        }}
      >
        <CirclePlus
          className="text-orange-main"
          style={{ width: size, height: size }}
        />
      </div>
    </button>
  );
};

const BottomBarButton = ({ Icon, label }) => (
  <button className="flex flex-col items-center">
    <Icon className="w-6 h-6 text-white" />
    <span className="text-white mt-1">{label}</span>
  </button>
);

const MoreMenu = ({ items }) => (
  <div className="absolute bottom-full mb-2 bg-white rounded-md shadow-lg">
    {items.map((item, index) => (
      <button key={index} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        <item.Icon className="inline-block w-4 h-4 mr-2" />
        {item.label}
      </button>
    ))}
  </div>
);

const BottomMenu = () => {
  const [layout, setLayout] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const allItems = useMemo(() => [
    { Icon: Home, label: 'Home' },
    { Icon: Newspaper, label: 'News' },
    { Icon: Bot, label: 'AI Coach' },
    { Icon: Calendar, label: 'Calendar' },
    { Icon: BarChart2, label: 'Stats' },
    { Icon: Users, label: 'Community' },
    { Icon: Briefcase, label: 'Collaboration' },
    { Icon: GraduationCap, label: 'Courses' },
  ], []);

  const layouts = useMemo(() => ({
    5: [0, 1, 'add', 2, 'more'],
    7: [0, 1, 2, 'add', 3, 4, 'more'],
    9: [0, 1, 2, 3, 'add', 4, 5, 6, 7],
  }), []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setLayout(layouts[5]);
      else if (width < 1024) setLayout(layouts[7]);
      else setLayout(layouts[9]);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [layouts]);

  return (
    <div className="bg-orange-main h-20 px-4 flex justify-between items-center relative">
      {layout.map((item, index) => {
        if (item === 'add') return <AddButton key="add" />;
        if (item === 'more') {
          return (
            <div key="more" className="relative">
              <BottomBarButton
                Icon={LayoutGrid}
                label="More"
                onClick={() => setShowMore(!showMore)}
              />
              {showMore && <MoreMenu items={allItems.slice(layout.length - 1)} />}
            </div>
          );
        }
        return <BottomBarButton key={index} {...allItems[item]} />;
      })}
    </div>
  );
};

export default BottomMenu;