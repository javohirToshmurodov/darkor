import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../redux/actions';
import { UploadedImg } from '../../styles';
import { useTranslation } from 'react-i18next';
function SpecialistForm() {
   const { t } = useTranslation()
   const [fullName, setName] = useState("")
   const [date, setDate] = useState("")
   const [birthday, setBirthday] = useState("")
   const [adress, setAddress] = useState("")
   const [phone, setPhone] = useState("")
   const [type, setType] = useState("")
   const navigate = useNavigate()
   const [dataType, setDataType] = useState([
      {
         oliy: "OLIY"
      },
      {
         oliy: "ORTA_MAXSUS"
      },
      {
         oliy: "ORTA"
      }
   ])
   const { name } = useParams()
   const [data, setData] = useState({})
   // const handleChange = (e) => {
   //    const { value, name } = e.target;
   //    setData({
   //       ...data,
   //       [name]: value,
   //    });
   // };

   const postSpecialist = (e) => {
      e.preventDefault()
      const res = instance.post('/api/v1/register/', {
         fullName: `${fullName}`,
         birthday: `${date}`,
         courseName: `${name}`,
         dataType: `${type}`,
         address: `${adress}`,
         phoneNumber: `${phone}`
      }).then((res) => {
         console.log(res.data);
         alert("Kursga muvaffaqiyatli ro'yxatdan o'tdingiz");
         navigate("./")
      })
         .catch((err) => {
            console.log(err);
            alert(
               "Muvaffaqiyatsiz yakunlandi, qayta urinib ko'ring"
            )
         });
      // console.log(name, birthday, adress, phone, type, date);
      setName("")
      setDate("")
      setType("")
      setPhone("")
   }
   return (
      <div className='container'>
         <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12 rounded shadow bordered px-5 py-3">
               <Form onSubmit={postSpecialist}>
                  <h5 className="text-center">{t("formTitle")}</h5>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>{t("fullName")}</Form.Label>
                     <Form.Control onChange={(e) => setName(e.target.value)} required type="text" placeholder="...." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formname">
                     <Form.Label>{t("birthday")}</Form.Label>
                     <Form.Control onChange={(e) => setDate(e.target.value)} required type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formfathername">
                     <Form.Label>{t("address")} </Form.Label>
                     <Form.Control onChange={(e) => setAddress(e.target.value)} required type="text" placeholder="..... " />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formDescription1">
                     <Form.Label>{t("type")}</Form.Label>
                     <Form.Select onChange={(e) => setType(e.target.value)} aria-label="Default select example">
                        <option defaultValue="daraja">Daraja</option>
                        {
                           dataType.map((e, i) => <option key={i}>
                              {e.oliy}
                           </option>)
                        }
                     </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="something">
                     <Form.Label>{t("phone")} </Form.Label>
                     <Form.Control onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" maxLength={"13"} placeholder="+998 _ _ _ _ _ _ _ _" required />
                  </Form.Group>




                  <div className="text-end mt-2">
                     <Button variant="primary" type="submit">
                        {t("submit")}
                     </Button>
                  </div>
               </Form >
            </div >

         </div >
      </div >
   );
}

export default SpecialistForm;