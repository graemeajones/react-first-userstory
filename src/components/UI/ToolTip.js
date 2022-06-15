import { useState } from 'react';
import useDimensions from 'react-use-dimensions';
import HoverDecorator from './HoverDecorator.js';
import { Card } from './Card.js';
import './ToolTip.css';

export default function ToolTip({ children, message }) {
  // Properies -----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div className="ToolTip">
      <HoverDecorator>
        {children}
        <Annotator message={message} />
      </HoverDecorator>
    </div>
  );
}

function Annotator({message, isParentHovering }) {
  // Properies -----------------------------------
  // Hooks ---------------------------------------
  const [isAnnotated, setIsAnnotated] = useState(false); 
  const [refAnnotationTarget, dimTarget] = useDimensions();
  const [refAnnotationMessage, dimMessage] = useDimensions();

  // Methods -------------------------------------
  let startTimer; // Don't start annotation straight away
  let stopTimer; // Clear lingering annotation!
  const delayStartOfAnnotation = 333; // i.e. millisecs
  const maxDurationOfAnnotation = 2000; // i.e. two seconds

  const startAnnotation = () => {
    startTimer = setTimeout( () => setIsAnnotated(true), delayStartOfAnnotation );
    stopTimer = setTimeout( () => setIsAnnotated(false), maxDurationOfAnnotation );
  }

  const clearAnnotation = () => {
    clearTimeout(startTimer);
    clearTimeout(stopTimer);
    setIsAnnotated(false);
  }

  // View ----------------------------------------
  if (isParentHovering && !isAnnotated) startAnnotation();
  if (!isParentHovering && isAnnotated) clearAnnotation();
  const renderOffset = 0.5 * (dimTarget.width - dimMessage.width);

  return (
    <div className="AnnotationTarget" ref={refAnnotationTarget}>
      {
        isAnnotated && (
          <Card>
            <div
              className="AnnotationMessage"
              ref={refAnnotationMessage}
              style={{ transform: `translate(${renderOffset}px,3px)` }}
            >
              <p>{ message }</p>
            </div>
          </Card>
        )
      }
    </div>
  );
}
