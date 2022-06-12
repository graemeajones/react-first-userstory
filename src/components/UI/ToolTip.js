import { useState,useRef,useEffect } from 'react';
import { Card } from './Card.js';
import './ToolTip.css';


export default function ToolTip({ children, message }) {
  // Properies -----------------------------------
  // let widthToolTip = 36; // Initially, the width value of the closed Action
  let widthMessage = 100; // Initially, the min-width value of ToolTip message

  // Hooks ---------------------------------------
  const [isHovering, setIsHovering] = useState(false);
  const refToolTip = useRef(null);
  const refMessage = useRef(null);
  
  useEffect(() => {
  }, [refToolTip,refMessage]);

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
      ref={refToolTip}
    >
      {children}
      {
        isHovering && (
          <Card>
            <div
              className="ToolTipMessage"
              ref={refMessage}
              style={{ transform: `translate(${0.5*(refToolTip.current.offsetWidth-widthMessage)}px,3px)` }}
            >
              <p>[{refToolTip.current.offsetWidth}] { message }</p>
            </div>
          </Card>
        )
      }
    </div>
  );
}
