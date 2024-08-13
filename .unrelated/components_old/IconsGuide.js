import React from 'react';
import { 
  IoAddOutline, IoTrashOutline, IoPencilOutline, IoShareOutline,
  IoHomeOutline, IoPersonOutline, IoSettingsOutline, IoSearchOutline,
  IoMenuOutline, IoCloseOutline, IoChevronBackOutline, IoChevronForwardOutline
} from 'react-icons/io5';

const IconGrid = ({ icons, bgColor, iconColor }) => (
  <div className={`grid grid-cols-4 gap-4 p-4 rounded-lg ${bgColor}`}>
    {icons.map((Icon, index) => (
      <div key={index} className="flex justify-center items-center h-16">
        <Icon className={`text-3xl ${iconColor}`} />
      </div>
    ))}
  </div>
);

const IconsGuide = () => {
  const icons = [
    IoAddOutline, IoTrashOutline, IoPencilOutline, IoShareOutline,
    IoHomeOutline, IoPersonOutline, IoSettingsOutline, IoSearchOutline,
    IoMenuOutline, IoCloseOutline, IoChevronBackOutline, IoChevronForwardOutline
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Icons</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Orange Icons on White Background</h3>
        <IconGrid icons={icons} bgColor="bg-white" iconColor="text-primary" />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">White Icons on Orange Background</h3>
        <IconGrid icons={icons} bgColor="bg-primary" iconColor="text-white" />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">White Icon on Gradient Background</h3>
          <div className="bg-gradient-primary p-4 rounded-lg flex justify-center items-center h-16">
            <IoAddOutline className="text-3xl text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Gradient Icon on White Background</h3>
          <div className="bg-white p-4 rounded-lg flex justify-center items-center h-16">
            <IoAddOutline className="text-3xl text-transparent bg-clip-text bg-gradient-primary" />
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-2">Designer Notes:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Icons are from the 'react-icons' library, specifically the Ionicons outline set (io5).</li>
          <li>Use outline style icons consistently across the application for a cohesive look.</li>
          <li>Ensure sufficient contrast between icon and background colors for accessibility.</li>
          <li>The gradient effect should be used sparingly for emphasis or key interactive elements.</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-2">Developer Notes:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Import icons from 'react-icons/io5' (e.g., <code className="bg-gray-200 px-1 rounded">import &#123; IoAddOutline &#125; from 'react-icons/io5'</code>).</li>
          <li>Use Tailwind classes to apply colors: <code className="bg-gray-200 px-1 rounded">text-primary</code> for orange, <code className="bg-gray-200 px-1 rounded">text-white</code> for white.</li>
          <li>For gradient icons, use: <code className="bg-gray-200 px-1 rounded">text-transparent bg-clip-text bg-gradient-primary</code>.</li>
          <li>Adjust icon size using Tailwind's text size classes or custom sizes as needed.</li>
        </ul>
      </div>
    </div>
  );
};

export default IconsGuide;