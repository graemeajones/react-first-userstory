import { useState } from 'react';
import { Card } from './Card.js';
import './ToolTip.css';


export default function ToolTip({ children, message }) {
  // Hooks ---------------------------------------
  const [isHovering, setIsHovering] = useState(false);

  // Methods -------------------------------------
  let startToolTipTimer; // Don't start ToolTip straight away
  let stopToolTipTimer; // Clear lingering ToolTips!
  const delayStartOfToolTip = 333; // i.e. millisecs
  const maxDurationOfToolTip = 2000; // i.e. two seconds

  const startToolTip = () => {
    startToolTipTimer = setTimeout( () => setIsHovering(true), delayStartOfToolTip );
    stopToolTipTimer = setTimeout( () => setIsHovering(false), maxDurationOfToolTip );
  }

  const clearToolTip = () => {
    clearTimeout(startToolTipTimer);
    clearTimeout(stopToolTipTimer);
    setIsHovering(false);
  }

  // View ----------------------------------------
  return (
    <div
      className="ToolTip"
      onMouseEnter={startToolTip}
      onMouseLeave={clearToolTip}
    >
      {
        isHovering && (
          <Card>
            <p>{ message }</p>
          </Card>
        )
      }
      { children }
    </div>
  );
}
