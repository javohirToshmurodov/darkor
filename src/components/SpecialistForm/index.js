import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UploadedImg } from '../../styles';

function SpecialistForm() {
   const [name, setName] = useState("")
   const [decsription1, setDescription1] = useState("")
   const [decsription2, setDescription2] = useState("")
   const [file, setFile] = useState({})
   const postSpecialist = (e) => {
      e.preventDefault()

   }
   return (
      <div className='container'>
         <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12 rounded shadow bordered p-3">
               <Form onSubmit={postSpecialist}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Specialist name</Form.Label>
                     <Form.Control required type="text" placeholder="Enter name" />
                     <Form.Text className="text-muted">
                        required field
                     </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDescription1">
                     <Form.Label>Description 1</Form.Label>
                     <Form.Control required as="textarea" type="text" placeholder="...description" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formDescription2">
                     <Form.Label>Description 2</Form.Label>
                     <Form.Control required as={"textarea"} type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="specialistImg">
                     <Form.Label>Upload an image</Form.Label>
                     <Form.Control required type="file" placeholder="" />
                  </Form.Group>
                  <div>
                     {/* {
                        file.url && <UploadedImg alt='no image here' src={file?.url}/>
                     } */}
                  </div>

                  <div className="text-end mt-2">
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                  </div>
               </Form>
            </div>

         </div>
      </div>
   );
}

export default SpecialistForm;