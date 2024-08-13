import React from 'react';

const ColorSwatch = ({ name, colorClass, usage, hex }) => (
  <div className="flex items-center space-x-4 mb-6">
    <div 
      className={`w-20 h-20 rounded-md shadow-md ${colorClass}`}
      title={name}
    ></div>
    <div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">Hex: {hex}</p>
      <p className="text-sm mb-1">Usage: {usage}</p>
    </div>
  </div>
);

const BrandColorPalette = () => {
  const colors = [
    { name: 'Primary Color', colorClass: 'bg-primary', usage: 'Primary buttons, highlights, and action elements', hex: '#FFA500' },
    { name: 'Secondary Color', colorClass: 'bg-secondary', usage: 'Secondary elements, backgrounds, and accents', hex: '#FFD580' },
    { name: 'Background Color', colorClass: 'bg-background', usage: 'Main background color', hex: '#FFFFFF' },
    { name: 'Primary Text', colorClass: 'bg-text-primary', usage: 'Primary text color', hex: '#000000' },
    { name: 'Secondary Text', colorClass: 'bg-text-secondary', usage: 'Secondary text color', hex: '#808080' },
    { name: 'Gradient', colorClass: 'bg-gradient-primary', usage: 'Gradient backgrounds, from light orange to primary orange', hex: 'N/A' },
  ];

  const tailwindConfigSnippet = `
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#FFA500',    // Orange
        'secondary': '#FFD580',  // Light Orange
        'background': '#FFFFFF', // White
        'text': {
          'primary': '#000000',  // Black
          'secondary': '#808080' // Grey
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #FFD580, #FFA500)',
      },
    },
  },
}`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
      <p className="text-lg mb-6">This color palette defines the core colors used throughout the application. Consistent use of these colors helps maintain visual coherence and brand identity.</p>
      
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}

      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-2">Color Usage Guidelines:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Main Background:</strong> Use the background color (#FFFFFF) for the main application background.</li>
          <li><strong>UI Elements:</strong> Use primary, secondary, or gradient colors for UI elements like headers, cards, or buttons.</li>
          <li><strong>Text:</strong> Use primary text color on light backgrounds, and background color on dark elements for contrast.</li>
          <li><strong>Icons:</strong> Use the color that provides the best contrast with the background. On light backgrounds, use primary or text colors. On colored backgrounds, use the background color (#FFFFFF).</li>
          <li><strong>Gradient:</strong> Use the gradient for special UI elements or to create visual hierarchy.</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-2">Developer Notes:</h3>
        <p className="mb-2">Use these Tailwind classes to apply the brand colors in your components. The colors and gradient are defined in the tailwind.config.js file as shown below:</p>
        <div className="relative">
          <pre className="bg-white p-4 rounded-md overflow-x-auto">
            <code className="text-sm language-javascript">{tailwindConfigSnippet}</code>
          </pre>
          <button 
            onClick={() => copyToClipboard(tailwindConfigSnippet)}
            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs"
          >
            Copy
          </button>
        </div>
        <p className="mt-4">Example usage:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><code className="bg-gray-200 px-1 rounded">bg-primary</code> for primary color background</li>
          <li><code className="bg-gray-200 px-1 rounded">text-secondary</code> for secondary text color</li>
          <li><code className="bg-gray-200 px-1 rounded">bg-gradient-primary</code> for gradient background</li>
        </ul>
      </div>
    </div>
  );
};

export default BrandColorPalette;