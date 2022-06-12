import OnHover from './OnHover.js';
import { CardWithFavourite } from './Card.js';
import ToolTip from './ToolTip.js';
import { ActionTray, ActionSubscribe, ActionUnsubscribe, ActionModify, ActionDelete } from './Actions.js';
import './ModuleCard.css';


export default function ModuleCard({module,handlers}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <OnHover>
      <CardWithFavourite
        isFavourite={module.isSubscribed}
        unFavourite={() => handlers.handleUnsubscribe(module.ModuleID)}
      >
        <div className="cardLayout">

          <div className="cardImage">
            <img src={module.ModuleImage} alt="Visual representation of module" />
          </div>

          <div className="cardDetails">
            <h1>{module.ModuleName} ({module.ModuleCode})</h1>
            <p>
              <span className="cardAttribute">Level</span>
              <span className="cardValue">{module.ModuleLevel}</span>
            </p>
          </div>

          <div className="cardActions">
            <ActionTray>
              {module.isSubscribed
                ?
                <ToolTip message="Click to remove module to favourites">
                  <ActionUnsubscribe onClick={() => handlers.handleUnsubscribe(module.ModuleID)} />
                </ToolTip>
                :
                <ToolTip message="Click to add module to favourites">
                  <ActionSubscribe onClick={() => handlers.handleSubscribe(module.ModuleID)} />
                </ToolTip>
              }
              <ToolTip message="Click to modify module details">
                <ActionModify onClick={handlers.handleModify} />
              </ToolTip>
              <ToolTip message="Delete module from list">
                <ActionDelete onClick={() => handlers.handleDelete(module.ModuleID)} />
              </ToolTip>
            </ActionTray>
          </div>
        </div>
      </CardWithFavourite>
    </OnHover>
  );
}
