import React from 'react'
import Toast from 'react-bootstrap/Toast';

const ToastM = () => {
   return (
      <div>
         <Toast>
            <Toast.Header>
               <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
               <strong className="me-auto">User added</strong>
               <small>just now</small>
            </Toast.Header>
            <Toast.Body>Muvaffaqiyatli</Toast.Body>
         </Toast>
      </div>
   )
}

export default Toast