// CreateContactModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import CreateContact from './CreateContact';

const CreateContactModal = ({ showModal: initialShowModal }) => {
  const [showModal, setShowModal] = useState(initialShowModal);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  return (
    <Modal>
      <CreateContact onSubmit={handleCloseModal} />
    </Modal>
  );
};

export default CreateContactModal;
