import React from 'react';
import { FaReact } from 'react-icons/fa';

const ExampleComponent = () => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Example Component</h2>
      <p className="mb-4">This is an example component using Tailwind CSS and react-icons.</p>
      <FaReact className="text-4xl text-blue-500" />
    </div>
  );
};

export default ExampleComponent;