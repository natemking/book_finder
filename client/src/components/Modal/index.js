import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalSave = ({ show, handleClose, book }) => {
    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body><i><strong>{ book }</strong></i> has been added to your Library!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default ModalSave;