import { useState } from 'react';
import Modal from '../UI/Modal.js';
import OnHover from '../UI/OnHover.js';
import ToolTip from '../UI/ToolTip.js';
import { ActionYes } from '../UI/Actions.js';


export default function MyAssessments() {
  // Properties ----------------------------------
  const actions = [];

  // Hooks ---------------------------------------
  const [showModal, setShowModal] = useState(true);

  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  actions.push(
    <OnHover>
      <ToolTip key="ActionYes" message="Click to dismiss modal">
        <ActionYes withText onClick={() => setShowModal(false)}/>
      </ToolTip>
    </OnHover>
  );

  return (
    <>
      <h1>My Assessments</h1>
      {
        showModal && (
          <Modal title="Alert!" actions={actions}>
            <p>Want this modal to go away?</p>
          </Modal>
        )
      }
    </>
  )
}
