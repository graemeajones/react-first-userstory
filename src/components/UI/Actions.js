import PropTypes from 'prop-types';
import { IconCross, IconList, IconPen, IconRedHeart, IconTick, IconTrash } from './Icons.js';
import './Actions.css';

// -----------------------------------------
// Action Tray /////////////////////////////
// -----------------------------------------

ActionTray.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}

export function ActionTray({children}) {
  return (
    <div className="ActionTray">
      { children }
    </div>
  );
}

// -----------------------------------------
// Action Button ///////////////////////////
// -----------------------------------------

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showText: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
};

function ActionButton({ children, onClick, showText, buttonText }) {
  return (
    <button className="Action" onClick={onClick}>
      {children} {showText && <p>{buttonText}</p>}
    </button>
  );
}

// -----------------------------------------
// Actions /////////////////////////////////
// -----------------------------------------

const ActionPropTypes = {
  onClick: PropTypes.func.isRequired,
  showText: PropTypes.bool
};

ActionListAll.propTypes = ActionPropTypes;

export function ActionListAll({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="List all" onClick={onClick} showText={showText} >
      <IconList />
    </ActionButton >
  );
}

ActionClose.propTypes = ActionPropTypes;

export function ActionClose({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="Close" onClick={onClick} showText={showText} >
      <IconCross />
    </ActionButton>
  );
}

ActionDelete.propTypes = ActionPropTypes;

export function ActionDelete({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="Delete" onClick={onClick} showText={showText} >
      <IconTrash />
    </ActionButton>
  );
}

ActionFavourites.propTypes = ActionPropTypes;

export function ActionFavourites({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="List favourites" onClick={onClick} showText={showText} >
      <IconRedHeart />
    </ActionButton>
  );
}

ActionModify.propTypes = ActionPropTypes;

export function ActionModify({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="Modify" onClick={onClick} showText={showText} >
      <IconPen />
    </ActionButton>
  );
}

ActionNo.propTypes = ActionPropTypes;

export function ActionNo({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="No" onClick={onClick} showText={showText} >
      <IconCross />
    </ActionButton>
  );
}

ActionSubscribe.propTypes = ActionPropTypes;

export function ActionSubscribe({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="Subscribe" onClick={onClick} showText={showText} >
      <IconTick />
    </ActionButton>
  );
}

ActionYes.propTypes = ActionPropTypes;

export function ActionYes({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="Yes" onClick={onClick} showText={showText} >
      <IconTick />
    </ActionButton>
  );
}

ActionUnsubscribe.propTypes = ActionPropTypes;

export function ActionUnsubscribe({ onClick, showText=false }) {
  return (
    <ActionButton buttonText="Unsubscribe" onClick={onClick} showTex={showText}>
      <IconCross />
    </ActionButton>
  );
}
