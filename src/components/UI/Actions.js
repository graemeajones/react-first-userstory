import { IconCross, IconList, IconPen, IconRedHeart, IconTick, IconTrash } from './Icons.js';
import './Actions.css';

// -----------------------------------------
// Action Tray /////////////////////////////
// -----------------------------------------

export function ActionTray({children}) {
  return (
    <div className="ActionTray">
      { children }
    </div>
  );
}

// -----------------------------------------
// Actions /////////////////////////////////
// -----------------------------------------

export function ActionListAll({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconList /> {withText && <p>List all</p>}
    </button>
  );
}

export function ActionClose({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconCross /> {withText && <p>Close</p>}
    </button>
  );
}

export function ActionDelete({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconTrash /> {withText && <p>Delete</p>}
    </button>
  );
}

export function ActionFavourites({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconRedHeart /> {withText && <p>List favourites</p>}
    </button>
  );
}

export function ActionModify({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconPen /> {withText && <p>Modify</p>}
    </button>
  );
}

export function ActionNo({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconCross /> {withText && <p>No</p>}
    </button>
  );
}

export function ActionSubscribe({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconTick /> {withText && <p>Subscribe</p>}
    </button>
  );
}

export function ActionYes({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconTick /> {withText && <p>Yes</p>}
    </button>
  );
}

export function ActionUnsubscribe({ onClick, withText }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconCross /> {withText && <p>Unsubscribe</p>}
    </button>
  );
}
