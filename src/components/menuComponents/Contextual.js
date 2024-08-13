// src/components/menuComponents/Contextual.js
import React from 'react';
import { PlusIcon, TrashIcon, EditIcon } from 'lucide-react';
import ContextualMenu from './ContextualMenu'; // Adjust the path as necessary

const Contextual = () => {
  // Define menu items
  const menuItems = [
    { id: 'delete', title: 'Delete', icon: TrashIcon },
    { id: 'add', title: 'Add Item', icon: PlusIcon },
    { id: 'edit', title: 'Edit', icon: EditIcon },
  ];

  return (
    <div className="p-4">
      {/* Render the ContextualMenu component */}
      <ContextualMenu title="Contextual Menu Example" items={menuItems} />
    </div>
  );
};

export default Contextual;
