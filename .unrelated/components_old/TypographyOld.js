// src/components/graphicDesign/Typography.js
import React from 'react';

const Typography = () => {
  // Helper component for text examples
  const TextExample = ({ text, bgClass, textClass, fontClass }) => (
    <div className={`p-4 ${bgClass} ${textClass} ${fontClass}`}>
      {text}
    </div>
  );


    
  return (
    <div className="space-y-8">
          {/* TITLE STYLE */}
          <TextExample 
            text="Typography" 
            bgClass="bg-gradient-orange bg-clip-text"
            textClass="text-transparent bg-clip-text font-bold text-5xl p-8"
            fontClass="font-nunito"
          />  
        
      {/* Fonts */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold mb-6"> </h1>
        <div className="grid grid-cols-3 gap-4">

          {/* Nunito */}  
          <TextExample 
            text="Nunito Font" 
            bgClass="bg-gradient-white shadow-md rounded-lg overflow-hidden"
            textClass="text-black text-heading font-bold"
            fontClass="font-nunito"
          />

          {/* Sans */}  
          <TextExample 
            text="Sans Font" 
            bgClass="bg-gradient-white shadow-md rounded-lg overflow-hidden"
            textClass="text-black text-heading"
            fontClass="font-sans"
          />
            
          {/* Sans Serif */}  
          <TextExample 
            text="Sans Serif Font" 
            bgClass="bg-gradient-white shadow-md rounded-lg overflow-hidden"
            textClass="text-black text-heading"
            fontClass="font-sans-serif"
          />
            
        </div>
      </div>

      {/* HEADING STYLE */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold mb-6"> </h1>
        <div className="grid grid-cols-3 gap-4">
            
          {/* GRADIENT HEADING STYLE */}
          <TextExample 
            text="Gradient Heading" 
            bgClass="bg-gradient-orange bg-clip-text"
            textClass="text-transparent bg-clip-text font-bold text-heading"
            fontClass="font-sans"
          />  

          {/* Black */}
          <TextExample 
            text="Black Heading"
            textClass="text-black text-heading font-bold"
            fontClass="font-sans"
          />

          {/* White */}
          <TextExample 
            text="White Heading" 
            bgClass="bg-gradient-orange shadow-md rounded-lg overflow-hidden" 
            textClass="text-white text-heading font-bold"
            fontClass="font-sans"
          />
            
        </div>
      </div>
        
      {/* SUBHEADINGS */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold mb-6"> </h1>
        <div className="grid grid-cols-3 gap-4">

          {/* GRADIENT SUBHEADING STYLE */}  
          <TextExample 
            text="Gradient Subheading" 
            bgClass="bg-gradient-orange bg-clip-text"
            textClass="text-transparent bg-clip-text text-title font-semibold"
            fontClass="font-sans"
          />

          {/* Black */}  
          <TextExample 
            text="Black Subheading"
            textClass="text-black text-title font-semibold"
            fontClass="font-sans"
          />

          {/* White */}  
          <TextExample 
            text="White Subheading" 
            bgClass="bg-gradient-orange shadow-md rounded-lg overflow-hidden"
            textClass="text-white text-title font-semibold"
            fontClass="font-sans"
          />
            
        </div>
      </div>


      {/* BASE TEXT STYLE FOR PARAGS, BUTTON TEXT, ETC */}  
        
      {/* Paragraph */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Paragraph Text</h2>
          
          <TextExample 
            text="Paragraph text style. This is an example of how a paragraph text would look."
          />
          
      </div>

{/* Testing new approach for text styles */}
<div className="space-y-12">
  <div>
    <h1 className="text-style-title">Title Style</h1>
  </div>

  <div>
    <h2 className="text-style-heading">Heading Style</h2>
  </div>

  <div>
    <h2 className="text-style-gradientHeading">Gradient Heading Style</h2>
  </div>

  <div>
    <h3 className="text-style-subheading">Subheading Style</h3>
  </div>

  <div>
    <h3 className="text-style-gradientSubheading">Gradient Subheading Style</h3>
  </div>

  <div>
    <p className="text-style-baseText">Base Text Style: This is an example of the base text style. It's used for paragraphs and general content throughout the website.</p>
  </div>

  {/* Examples with different backgrounds */}
  <div>
    <h2 className="text-style-heading mb-4">Examples with Different Backgrounds</h2>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-style-subheading">Heading on White</h3>
        <p className="text-style-baseText">Base text on a white background.</p>
      </div>
      
      <div className="bg-orange-main p-4 rounded-md shadow-md">
        <h3 className="text-style-subheading text-white">Heading on Orange</h3>
        <p className="text-style-baseText text-white">Base text on an orange background.</p>
      </div>
      
      <div className="bg-gradient-orange p-4 rounded-md shadow-md">
        <h3 className="text-style-subheading text-white">Heading on Gradient</h3>
        <p className="text-style-baseText text-white">Base text on a gradient background.</p>
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
        
    </div>
  );
};

export default Typography;