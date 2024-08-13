import React from 'react';

const LogoVariant = ({ title, imageSrc, description }) => (
  <div className="bg-gradient-white shadow-md rounded-lg overflow-hidden">
    <div className="bg-gradient-orange text-center py-4 text-4xl text-transparent bg-clip-text">
      {title}
    </div>
    <div className="p-6 flex items-center justify-center">
      <img src={imageSrc} alt={title} className="max-w-full h-auto" />
    </div>
    <p className="mt-4 mb-4 px-6 text-gray-600">{description}</p>
  </div>
);

const Logos = () => {
  // Replace these with your actual logo files
  const logoVariants = [
    {
      title: "MAIN",
      imageSrc: `${process.env.PUBLIC_URL}/assets/primary-logo.svg`,
      description: "The primary logo should be used in most cases."
    },
    {
      title: "SYMBOL",
      imageSrc: `${process.env.PUBLIC_URL}/assets/icon-logos.svg`,
      description: "The logo symbol version is for social profiles, favicons, and 1:1 spaces."
    },
    {
      title: "WIDE",
      imageSrc: `${process.env.PUBLIC_URL}/assets/horizontal-logos.svg`,
      description: "The horizontal layout is suitable for wide spaces like headers."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {logoVariants.map((variant, index) => (
        <LogoVariant key={index} {...variant} />
      ))}
    </div>
  );
};

export default Logos;