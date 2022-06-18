import PropTypes from 'prop-types';
import HoverDecorator from './HoverDecorator.js';
import FavouriteDecorator from './FavouriteDecorator.js';
import { Card } from './Card.js';
import ToolTipDecorator from './ToolTipDecorator.js';
import { ActionTray, ActionSubscribe, ActionUnsubscribe, ActionModify, ActionDelete } from './Actions.js';
import './ModuleCard.css';


ModuleCard.propTypes = {
  module: PropTypes.shape({
    isSubscribed: PropTypes.bool,
    ModuleID: PropTypes.number.isRequired,
    ModuleImage: PropTypes.string.isRequired,
    ModuleName: PropTypes.string.isRequired,
    ModuleCode: PropTypes.string.isRequired,
    ModuleLevel: PropTypes.number.isRequired
  }),
  handlers: PropTypes.exact({
    handleSubscribe: PropTypes.func.isRequired,
    handleUnsubscribe: PropTypes.func.isRequired,
    handleModify: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  })
};

export default function ModuleCard({module,handlers}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <HoverDecorator>
      <Card>
        <FavouriteDecorator
          isFavourite={module.isSubscribed}
          unFavourite={() => handlers.handleUnsubscribe(module.ModuleID)}
        />
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
                ? <ToolTipDecorator message="Click to remove module to favourites">
                    <ActionUnsubscribe onClick={() => handlers.handleUnsubscribe(module.ModuleID)} />
                  </ToolTipDecorator>
                : <ToolTipDecorator message="Click to add module to favourites">
                    <ActionSubscribe onClick={() => handlers.handleSubscribe(module.ModuleID)} />
                  </ToolTipDecorator>
              }
              <ToolTipDecorator message="Click to modify module details">
                <ActionModify onClick={handlers.handleModify} />
              </ToolTipDecorator>
              <ToolTipDecorator message="Delete module from list">
                <ActionDelete onClick={() => handlers.handleDelete(module.ModuleID)} />
              </ToolTipDecorator>
            </ActionTray>
          </div>

        </div>
      </Card>
    </HoverDecorator>
  );
}
