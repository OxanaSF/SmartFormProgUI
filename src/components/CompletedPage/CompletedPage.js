import React, { useEffect, useState } from 'react';
import './CompletedPage.css'; // Import your CSS file for styling

const CompletedPage = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className={`animatedComponent ${inProp ? 'entering' : ''}`}>
      {/* Your content goes here */}
      <button>Click me</button>
    </div>
  );
};

export default CompletedPage;
