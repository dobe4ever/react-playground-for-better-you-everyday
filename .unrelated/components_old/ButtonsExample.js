import React from 'react';
import IconButton from './IconButton';
import { IoAddOutline, IoTrashOutline, IoPencilOutline, IoShareOutline } from 'react-icons/io5';

const ButtonsExample = () => {
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

export default ButtonsExample;