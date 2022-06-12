import OnHover from './OnHover.js';
import { IconRedHeart } from './Icons.js';
import ToolTip from './ToolTip.js';
import './Card.css';


export function CardContainer({ children, className }) {
  return (
    <div className={"CardContainer "+className}>
      {children}
    </div>
  );
}

export function Card({ children, onClick, isHovering }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div className={"Card " + (isHovering && "CardHover")} onClick={onClick}>
      {children}
    </div>
  );
}

export function CardWithHover({ children, onClick }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <OnHover>
      <Card onClick={onClick}>
        {children}
      </Card>
    </OnHover>
  );
}

export function CardWithFavourite({ children, onClick, isFavourite, unFavourite }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <CardWithHover onClick={onClick}>
      {
        isFavourite && (
          <div className="favourite" onClick={unFavourite}>
            <ToolTip message="Click to unfavourite"><IconRedHeart /></ToolTip>
          </div>
        )
      }
      {children}
    </CardWithHover>
  );
}
