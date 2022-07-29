import { Form } from 'antd'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { instance } from '../../../redux/actions'

const CreateService = () => {
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
  })

  const submit = async (e) => {
    e.preventDefault()
    const res = await instance.post('api/v1/homeService/add', data)
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
    })
    if (res.data.success) {
      alert("Qo'shildi")
    } else {
      alert('xatolik')
    }
  }

  const handleDate = (e) => {
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

  return (
    <div className='row' onSubmit={submit}>
      <form>
        <div className='form-group'>
          <label htmlFor='titleUz'>TitleUz</label>
          <input
            required
            type='text'
            className='form-control'
            id='titleUz'
            aria-describedby='emailHelp'
            placeholder='Name'
            onChange={(e) => handleDate(e)}
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
            onChange={(e) => handleDate(e)}
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
            onChange={(e) => handleDate(e)}
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
            onChange={(e) => handleDate(e)}
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
            onChange={(e) => handleDate(e)}
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
            onChange={(e) => handleDate(e)}
            name='descriptionEn'
            value={data.descriptionEn}
          />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='youTubeVideo'>
            youTubeVideo | eslatma tugri ishlashi uchun video linkini Поделиться
            bolimidan olib junating junatgan videoingiz ning faqat id si
            korinadi
          </label>
          <input
            required
            type='text'
            className='form-control'
            id='youTubeVideo'
            aria-describedby='emailHelp'
            placeholder='Name'
            onChange={(e) => handleDate(e)}
            name='youTubeVideo'
            value={data.youTubeVideo}
          />
        </div>
        <br />

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateService
