// src/components/graphicDesign/Typography.js
import React from 'react';

const Typography = () => {

  return (
    // space-y-12 = vertical space between each child below */}
    <div className="space-y-12">
        
      <div>
        <h1 className="text-style-title">Typography</h1>
      </div>

        
      <div>
        <h1 className="text-style-heading">Default Heading</h1>
      </div>
    
      <div>
        <h2 className="text-style-heading bg-gradient-orange bg-clip-text text-transparent">Gradient Heading</h2>
      </div>
    
      <div>
        <h1 className="text-style-subheading">Default Subheading</h1>
      </div>
    
      <div>
        <h3 className="text-style-subheading bg-gradient-orange bg-clip-text text-transparent">Gradient Subheading</h3>
      </div>
    
      <div>
        <p>This is an example of default text put directly in 'p' tags, which defaults to the 'base' CSS as defined in the Tailwind config file. This style is the default size & font etc for most text labels like buttons, menus etc, as well as paragraphs.</p>
      </div>
    
      {/* Examples with different backgrounds */}
      <div>
        <h2 className="text-style-heading mb-4">TextBox Backgrounds</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-style-subheading">Subheading on White BG</h3>
            <p className="text-style-baseText">Base text on a white background.</p>
          </div>
          
          <div className="bg-orange-main p-4 rounded-md shadow-md">
            <h3 className="text-style-subheading text-white">White subheading on Orange BG</h3>
            <p className="text-white">Base text on an orange background.</p>
          </div>

          <div className="bg-gradient-white bg-clip-content-box content-box-transparent p-4 rounded-md shadow-md">
            <h3 className="text-style-subheading">White subheading on Gradient box</h3>
            <p>Base text on a gradient background.</p>
          </div>
            
          <div className="bg-gradient-orange bg-clip-content-box content-box-transparent p-4 rounded-md shadow-md">
            <h3 className="text-style-subheading text-white">White subheading on Gradient box</h3>
            <p className="text-white">Base text on a gradient background.</p>
          </div>
            
        </div>
      </div>
    
      {/* Combining styles */}
      <div>
        <h2 className="text-style-gradientHeading mb-4">Combining Styles</h2>
        <div className="space-y-2">
          <p className="text-style-baseText font-bold">Bold base text</p>
          <p className="text-style-baseText italic">Italic base text</p>
          <p className="text-style-baseText underline">Underlined base text</p>
        </div>
      </div>
    </div>
  );
};

export default Typography;