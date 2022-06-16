import React from 'react';
import PropTypes from 'prop-types';
import HoverDecorator from './HoverDecorator.js';
import ToolTip from './ToolTip.js';
import { IconRedHeart } from './Icons.js';
import './FavouriteDecorator.css';


FavouriteDecorator.propTypes = {
  isFavourite: PropTypes.bool,
  unFavourite: PropTypes.func
};

export default function FavouriteDecorator({ children, isFavourite, unFavourite }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div className="FavouriteDecorator">
      {
        isFavourite && 
          <div className="Favourite" onClick={unFavourite}>
            <HoverDecorator>
              <ToolTip message="Click to unfavourite"><IconRedHeart /></ToolTip>
            </HoverDecorator>
          </div>
      }
      {children}
    </div>
  );
}
