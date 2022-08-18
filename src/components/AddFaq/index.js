import React from 'react'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
const AddFaq = (props) => {
   return (
      <Modal show={props.show} onHide={props.handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
         </Modal.Header>
         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
         <Modal.Footer>

            <Button variant="primary" onClick={""}>
               Save Changes
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default AddFaq