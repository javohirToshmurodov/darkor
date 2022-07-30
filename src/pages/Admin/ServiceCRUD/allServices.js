import React, { useEffect, useState } from 'react'
import { instance } from '../../../redux/actions'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Spin } from 'antd'

const GetAllServices = () => {
  const [allData, setAllData] = useState([])
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    titleUz: '',
    titleRU: '',
    titleEn: '',
    descriptionUZ: '',
    descriptionRu: '',
    descriptionEn: '',
    youTubeVideo: '',
    galleryUz: {},
    galleryRu: {},
    galleryEn: {},
    id: '',
  })

  const handleClose = () => {
    setShow(false)

    setData({
      titleUz: '',
      titleRU: '',
      titleEn: '',
      descriptionUZ: '',
      descriptionRu: '',
      descriptionEn: '',
      youTubeVideo: '',
      galleryUz: {},
      galleryRu: {},
      galleryEn: {},
      id: '',
    })
  }

  const getAllService = async () => {
    try {
      setLoading(true)
      const data = await instance.get('api/v1/homeService/list?size=10&page=0')
      setAllData([...data.data?.body])
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    handleClose()
    const res = await instance.put('api/v1/homeService/update', data)
    if (res.data.success) {
      alert("O'zgartirildi")
    } else {
      alert("Xatolik bo'ldi")
    }
    getAllService()
  }

  const handleEditService = (e) => {
    const { value, name } = e.target
    if (name == 'youTubeVideo') {
      let temp = ''
      temp += value.substring(17)
      data[name] = temp
      setData({ ...data })
      return
    }
    data[name] = value
    setData({ ...data })
  }

  const handleEdit = (item) => {
    data.id = item
    setData({ ...data })
    setShow(!show)
  }

  useEffect(() => {
    getAllService()
  }, [])

  const deleteService = async (id) => {
    const newState = allData.filter((item) => item.id !== id)
    setAllData([...newState])
    const res = await instance.delete(`api/v1/homeService/deleted/${id}`)
    if (res.data.success) {
      alert("O'chirildi")
    } else {
      alert('Xatolik')
    }
    getAllService()
  }

  return (
    <Spin spinning={loading}>
      <div className='container'>
        <ul className='list-group'>
          {allData.map((item) => (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <button
                className='btn btn-success'
                onClick={() => handleEdit(item.id)}
              >
                Tahrirlash
              </button>
              <span>{item.description}</span>
              <button
                className='btn btn-danger'
                onClick={() => deleteService(item.id)}
              >
                O'chirish
              </button>
            </li>
          ))}
        </ul>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='form-group'>
              <label htmlFor='titleUz'>TitleUz</label>
              <input
                required
                type='text'
                className='form-control'
                id='titleUz'
                aria-describedby='emailHelp'
                placeholder='Name'
                onChange={(e) => handleEditService(e)}
                name='titleUz'
                value={data.titleUz}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='titleRU'>titleRU</label>
              <input
                required
                type='text'
                className='form-control'
                id='titleRU'
                aria-describedby='emailHelp'
                placeholder='Name'
                onChange={(e) => handleEditService(e)}
                name='titleRU'
                value={data.titleRU}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='titleEn'>titleEn</label>
              <input
                required
                type='text'
                className='form-control'
                id='titleEn'
                aria-describedby='emailHelp'
                placeholder='Name'
                onChange={(e) => handleEditService(e)}
                name='titleEn'
                value={data.titleEn}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='descriptionUZ'>descriptionUZ</label>
              <input
                required
                type='text'
                className='form-control'
                id='descriptionUZ'
                aria-describedby='emailHelp'
                placeholder='Name'
                onChange={(e) => handleEditService(e)}
                name='descriptionUZ'
                value={data.descriptionUZ}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='descriptionRu'>descriptionRu</label>
              <input
                required
                type='text'
                className='form-control'
                id='descriptionRu'
                aria-describedby='emailHelp'
                placeholder='Name'
                onChange={(e) => handleEditService(e)}
                name='descriptionRu'
                value={data.descriptionRu}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='descriptionEn'>descriptionEn</label>
              <input
                required
                type='text'
                className='form-control'
                id='descriptionEn'
                aria-describedby='emailHelp'
                placeholder='Name'
                onChange={(e) => handleEditService(e)}
                name='descriptionEn'
                value={data.descriptionEn}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='youTubeVideo'>
                youTubeVideo | eslatma tugri ishlashi uchun video linkini
                Поделиться bolimidan olib junating junatgan videoingiz ning
                faqat id si korinadi
              </label>
              <input
                required
                type='text'
                className='form-control'
                id='youTubeVideo'
                aria-describedby='emailHelp'
                placeholder='Name'
                onChange={(e) => handleEditService(e)}
                name='youTubeVideo'
                value={data.youTubeVideo}
              />
            </div>
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={handleClose}>
              Bekor qilish
            </Button>
            <Button variant='primary' onClick={submit}>
              Saqlash
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Spin>
  )
}

export default GetAllServices
