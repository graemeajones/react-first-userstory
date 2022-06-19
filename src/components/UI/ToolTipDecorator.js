import PropTypes from 'prop-types';
import { useState } from 'react';
import useDimensions from 'react-use-dimensions';
import HoverDecorator from './HoverDecorator.js';
import { Card } from './Card.js';
import './ToolTipDecorator.css';

import RenderCount from './RenderCount.js';


ToolTipDecorator.propTypes = {
  message: PropTypes.string.isRequired
};

export default function ToolTipDecorator({ children, message }) {
  // Properies -----------------------------------
  // Hooks ---------------------------------------
  const [refParent, dimParent] = useDimensions();
  
  // Methods -------------------------------------
  // View ----------------------------------------
    return (
    <div className="ToolTipDecorator" ref={refParent}>
      <HoverDecorator>
        {children}
        <ToolTip message={message} width={dimParent.width} />
      </HoverDecorator>
    </div>
  );
}

ToolTip.propTypes = {
  message: PropTypes.string.isRequired,
  isParentHovering: PropTypes.bool
};

function ToolTip({message, width: parentWidth, isParentHovering }) {
  // Properies -----------------------------------
  // Hooks ---------------------------------------
  const [isAnnotated, setIsAnnotated] = useState(false);
  const [refChild, dimChild] = useDimensions();

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
  const toolTipMinWidth = 100;
  const renderOffset =
    dimChild.width
      ? 0.5 * (parentWidth - dimChild.width)
      : parentWidth > toolTipMinWidth
        ? 0
        : 0.5 * (parentWidth - toolTipMinWidth);

  return (
    isAnnotated &&
      <Card>
        <div
          className="ToolTip"
          ref={refChild}
          style={{ transform: `translate(${renderOffset}px,3px)` }}
        >
          <RenderCount background="Red" />
          <p>{ message }</p>
        </div>
      </Card>
  );
}
