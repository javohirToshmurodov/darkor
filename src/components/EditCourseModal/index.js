import React, { useEffect } from 'react'
import { instance } from '../../redux/actions'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const EditCouresModal = (props) => {


   // const getCourseDetailEdit = () => {
   //    instance.put(`/api/v1/courseDetails/for/update/${props.id}`).then((res) => {
   //       console.log(res.data);
   //    }).catch((err) => console.log(err))
   // }
   useEffect(() => {
      console.log(props);
      // getCourseDetailEdit()
   }, [props.id])
   return (
      <div>
         <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Dialog>
               <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
               </Modal.Header>

               <Modal.Body>
                  <p>Modal body text goes here.</p>
               </Modal.Body>

               <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save changes</Button>
               </Modal.Footer>
            </Modal.Dialog>
         </Modal>
      </div>
   )
}

export default EditCouresModal