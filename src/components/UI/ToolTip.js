import { useState,useRef,useEffect } from 'react';
import { Card } from './Card.js';
import './ToolTip.css';


export default function ToolTip({ children, message, isParentHovering }) {
  // Properies -----------------------------------
  // let widthToolTip = 36; // Initially, the width value of the closed Action
  let widthMessage = 100; // Initially, the min-width value of ToolTip message

  // Hooks ---------------------------------------
  const [isShown, setIsShown] = useState(false);
  const refToolTip = useRef(null);
  const refMessage = useRef(null);
  
  useEffect(() => {
  }, [refToolTip,refMessage]);

  // Methods -------------------------------------
  let startTimer; // Don't start ToolTip straight away
  let stopTimer; // Clear lingering ToolTips!
  const delayStartOfToolTip = 333; // i.e. millisecs
  const maxDurationOfToolTip = 2000; // i.e. two seconds

  const startToolTip = () => {
    startTimer = setTimeout( () => setIsShown(true), delayStartOfToolTip );
    stopTimer = setTimeout( () => setIsShown(false), maxDurationOfToolTip );
  }

  const clearToolTip = () => {
    clearTimeout(startTimer);
    clearTimeout(stopTimer);
    setIsShown(false);
  }

  // View ----------------------------------------
  if (isParentHovering && !isShown) startToolTip();
  if (!isParentHovering && isShown) clearToolTip();

  return (
    <div className="ToolTip" ref={refToolTip}>
      {children}
      {
        isShown && (
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
