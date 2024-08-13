import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TagCheatsheet = () => {
  const categories = [
    {
      name: "Container Elements",
      elements: [
        {
          tag: "<div>",
          description: "A generic container for grouping and styling other elements.",
          usage: "Used for layout purposes, applying classes, or wrapping other elements.",
          example: '<div className="p-4 bg-gray-100">Content here</div>',
          render: <div className="p-4 bg-gray-100">Content here</div>
        },
        // Add other container elements here
      ]
    },
    {
      name: "Text Elements",
      elements: [
        {
          tag: "<h2>",
          description: "Second-level heading.",
          usage: "Used to define headings for sections and subsections.",
          example: '<h2 className="text-2xl font-bold">Subheading</h2>',
          render: <h2 className="text-2xl font-bold">Subheading</h2>
        },
        // Add other text elements here
      ]
    },
    // Add other categories here
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">HTML/JSX Tags CheatSheet</h1>
      <Tabs>
        <TabList>
          {categories.map((category, index) => (
            <Tab key={index}>{category.name}</Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            {category.elements.map((element, elemIndex) => (
              <div key={elemIndex} className="mb-8 border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">{element.tag}</h3>
                <p className="mb-2"><strong>Description:</strong> {element.description}</p>
                <p className="mb-2"><strong>Usage:</strong> {element.usage}</p>
                <div className="bg-gray-100 p-4 rounded mb-2">
                  <pre><code>{element.example}</code></pre>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="text-lg font-semibold mb-2">Rendered Output:</h4>
                  {element.render}
                </div>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TagCheatsheet;