import PropTypes from 'prop-types';
import { useState } from 'react';
import useDimensions from 'react-use-dimensions';
import HoverDecorator from './HoverDecorator.js';
import { Card } from './Card.js';
import './ToolTipDecorator.css';


ToolTipDecorator.propTypes = {
  message: PropTypes.string.isRequired
};

export default function ToolTipDecorator({ children, message }) {
  // Properies -----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div className="ToolTipDecorator">
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

  // This computes the offset to align the button and the tooltip below it
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
