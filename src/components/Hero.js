import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-800 text-center py-8 pb-20">
      <div className="text-white text-4xl font-bold">Find your next event</div>
      <div className="text-gray-400">
        <span className="mr-2">41 events in your groups</span>
        <span className="mr-2">&middot;</span>
        <span>3,981 events near your</span>
      </div>
    </div>
  );
};

export default Hero;
