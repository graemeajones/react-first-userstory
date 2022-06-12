import React from 'react';
import { useState } from 'react';

export default function OnHover({ children }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  const [isHovering, setIsHovering] = useState(false);
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div
      className="OnHover"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {
        React.Children.map(children, (child) => {
          return React.cloneElement(child, { isHovering });
         })
      }
    </div>
  );
}
