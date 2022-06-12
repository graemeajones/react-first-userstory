import { useState } from 'react';
import { CardContainer } from '../UI/Card.js';
import ModuleCard from '../UI/ModuleCard.js';
import ToolTip from '../UI/ToolTip.js';
import { ActionTray, ActionYes, ActionNo, ActionFavourites, ActionListAll } from '../UI/Actions.js';
import Modal from '../UI/Modal.js';
import initialListOfModules from '../../data/modules.js';


export default function MyModules() {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  const [modules, setModules] = useState(initialListOfModules);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(undefined);
  const [modalMessage, setModalMessage] = useState(undefined);
  const [modalActions, setModalActions] = useState([]);

  // Context -------------------------------------
  // Methods -------------------------------------

  const handleSubscribe = (id) => setModules(
    modules.map((module) => (
      module.ModuleID === id ? { ...module, isSubscribed: true } : module
    ))
  );

  const handleUnsubscribe = (id) => setModules(
    modules.map((module) => (
      module.ModuleID === id ? { ...module, isSubscribed: false } : module
    ))
  );
  
  const handleModify = () => { console.log("Handle the modify request") };

  const handleDeleteRequest = (id) => {
    setupConfirmModal(id);
    setShowModal(true);
  };

  const setupConfirmModal = (id) => {
    const targetModule = modules.find((module) => module.ModuleID === id);
    setModalTitle("Alert!");
    setModalMessage(<p>Are you sure you want to delete module {moduleName(targetModule)}?</p>);
    setModalActions(
      [
        <ToolTip key="ActionYes" message="Click to confirm deletion">
          <ActionYes withText onClick={() => handleDelete(id)} />
        </ToolTip>,
        <ToolTip key="ActionNo" message="Click to abandon deletion">
          <ActionNo withText onClick={() => dismissModal()} />
        </ToolTip>
      ]
    );
  }

  const moduleName = (module) => `${module.ModuleCode} ${module.ModuleName}`;

  const handleDelete = (id) => {
    setModules(modules.filter((module) => module.ModuleID !== id));
    dismissModal();
  }

  const dismissModal = () => setShowModal(false);
  
  const handleListAllModules = () => setModules(initialListOfModules);
  const handleListFavourites = () => setModules(modules.filter((module) => module.isSubscribed));
  

  // View ----------------------------------------
  return (
    <>
      <h1>My Modules</h1>

      <ActionTray>
        <ToolTip message="List favourite modules">
          <ActionFavourites withText onClick={handleListFavourites} />
        </ToolTip>
        <ToolTip message="List all modules">
          <ActionListAll withText onClick={handleListAllModules} />
        </ToolTip>
      </ActionTray>
        
      <CardContainer>
      {
        modules.map((module) => {
          return (
            <ModuleCard
              key={module.ModuleID} module={module}
              handlers={{ handleSubscribe, handleUnsubscribe, handleModify, handleDelete: handleDeleteRequest }}
            />
          );
        })
      }
      </CardContainer>

      {
      showModal &&
        <Modal title={modalTitle} actions={modalActions}>{modalMessage}</Modal>
      }
    </>
  )
}
