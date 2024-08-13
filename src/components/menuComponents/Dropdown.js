import React from 'react';
import { PlusIcon, TrashIcon, EditIcon } from 'lucide-react';
import DropdownMenu from '../menuComponents/DropdownMenu'; // Adjust the path as necessary

const Dropdown = () => {
  // Define menu items
  const menuItems = [
    { id: 'delete', title: 'Delete', icon: TrashIcon },
    { id: 'add', title: 'Add Item', icon: PlusIcon },
    { id: 'edit', title: 'Edit', icon: EditIcon },
  ];

  return (
    <div className="p-4">
      {/* Render the Dropdown component */}
      <DropdownMenu name="Example Dropdown" items={menuItems} />
    </div>
  );
};

export default Dropdown;
