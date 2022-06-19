import { useState } from 'react';
import { CardContainer } from '../UI/Card.js';
import ModuleCard from '../UI/ModuleCard.js';
import ToolTipDecorator from '../UI/ToolTipDecorator.js';
import { ActionTray, ActionYes, ActionNo, ActionFavourites, ActionListAll } from '../UI/Actions.js';
import Modal from '../UI/Modal.js';
import initialListOfModules from '../../data/modules.js';
import './MyModules.css';

import RenderCount from '../UI/RenderCount.js';


export default function MyModules() {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  const [modules, setModules] = useState(initialListOfModules);

  const [showModal, setShowModal] = useState(false);
  const [modalHeading, setModalHeading] = useState(undefined);
  const [modalContent, setModalContent] = useState(undefined);
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

  const handleDelete = (id) => {
    setModules(modules.filter((module) => module.ModuleID !== id));
    dismissModal();
  }

  const handleDeleteRequest = (id) => {
    configureDeleteModal(id);
    setShowModal(true);
  };

  const configureDeleteModal = (id) => {
    const deleteModule = modules.find((module) => module.ModuleID === id);
    setModalHeading("Alert!");
    setModalContent(<p>Are you sure you want to delete module {deleteModule.ModuleCode} {deleteModule.ModuleName}?</p>);
    setModalActions(
      [
        <ToolTipDecorator key="ActionYes" message="Click to confirm deletion">
          <ActionYes showText onClick={() => handleDelete(id)} />
        </ToolTipDecorator>,
        <ToolTipDecorator key="ActionNo" message="Click to abandon deletion">
          <ActionNo showText onClick={() => dismissModal()} />
        </ToolTipDecorator>
      ]
    );
  }

  const dismissModal = () => setShowModal(false);
  
  const handleListAllModules = () => setModules(initialListOfModules);
  const handleListFavourites = () => setModules(modules.filter((module) => module.isSubscribed));
  
  // View ----------------------------------------
  return (
    <>
      <h1>My Modules</h1>

      <ActionTray>
        <RenderCount background="Cyan" />
        <ToolTipDecorator message="List favourite modules">
          <RenderCount background="Green" />
          <ActionFavourites showText onClick={handleListFavourites} />
        </ToolTipDecorator>
        <ToolTipDecorator message="List all modules">
          <ActionListAll showText onClick={handleListAllModules} />
        </ToolTipDecorator>
      </ActionTray>
        
      <CardContainer>
        {
          modules.map((module) => {
          return (
            <ModuleCard
              key={module.ModuleID}
              module={module}
              handlers={{ handleSubscribe, handleUnsubscribe, handleModify, handleDelete: handleDeleteRequest }}
            />
          );
        })
      }
      </CardContainer>

      {
        showModal &&
          <Modal title={modalHeading} actions={modalActions}>
            {modalContent}
          </Modal>
      }
    </>
  )
}

