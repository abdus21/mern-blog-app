import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    const handleMouseLeave = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Some browsers require a return value to trigger the confirmation message
      return ''; // For compatibility with some older browsers
    };

    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <h1>Your Website Content</h1>
      <p>This is your website content.</p>
    </div>
  );
}

export default About