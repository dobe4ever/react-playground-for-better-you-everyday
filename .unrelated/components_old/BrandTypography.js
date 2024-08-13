// BrandTypography.js
import React from 'react';

const TypeExample = ({ tag, size, lineHeight, letterSpacing, text }) => {
  const Tag = tag;
  return (
    <div className="mb-6">
      <Tag style={{ fontSize: size, lineHeight, letterSpacing }}>{text}</Tag>
      <p className="text-sm text-gray-600 mt-1">
        {`${tag}: ${size}, Line Height: ${lineHeight}, Letter Spacing: ${letterSpacing}`}
      </p>
    </div>
  );
};

const BrandTypography = () => {
  const typeExamples = [
    { tag: 'h1', size: '2.5rem', lineHeight: '1.2', letterSpacing: '0.5px', text: 'Heading 1' },
    { tag: 'h2', size: '2rem', lineHeight: '1.2', letterSpacing: '0.5px', text: 'Heading 2' },
    { tag: 'h3', size: '1.75rem', lineHeight: '1.2', letterSpacing: '0.5px', text: 'Heading 3' },
    { tag: 'p', size: '1rem', lineHeight: '1.5', letterSpacing: 'normal', text: 'Body Text' },
    { tag: 'p', size: '0.875rem', lineHeight: '1.5', letterSpacing: 'normal', text: 'Small Text' },
  ];

  return (
    <div>
      <p className="mb-4">Font Family: Gothic Rounded (Fallback: Rounded, sans-serif)</p>
      {typeExamples.map((example, index) => (
        <TypeExample key={index} {...example} />
      ))}
    </div>
  );
};

export default BrandTypography;