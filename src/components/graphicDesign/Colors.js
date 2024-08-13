import React from 'react';

const ColorSwatch = ({ name, colorClass, css, hex }) => (
  <div className="flex items-center space-x-4 mb-6">
    <div className={`w-20 h-20 rounded-md shadow-md ${colorClass}`} title={name}></div>
    <div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-black-600 mb-1">CSS: {css}</p>
      <p className="text-black-600 mb-1">Hex: {hex}</p>
    </div>
  </div>
);

const Colors = () => {
  const colors = [
    { name: 'Orange Main', colorClass: 'bg-orange-main', css: 'bg-orange-main', hex: '#FF5300 ' },
    { name: 'Orange Light', colorClass: 'bg-orange-light', css: 'bg-orange-light', hex: '#FFB700' },
    { name: 'Gradient Orange', colorClass: 'bg-gradient-orange', css: 'bg-gradient-orange', hex: '#FF5300 to #FFB700 (45 deg)' },
    { name: 'Gradient White', colorClass: 'bg-gradient-white', css: 'bg-gradient-white', hex: '#FFF3E2 to #FFFFE2 (45 deg)' },  
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
      <div className="border-4 border-border-gradient-orange bg-transparent rounded-lg">
        <h1 className="text-3xl font-bold font-sans bg-gradient-orange text-transparent bg-clip-text bg-clip-border p-7">Gradient text in gradient box</h1>
      </div>    
    </div>

    </div>
  );
};
export default Colors;


