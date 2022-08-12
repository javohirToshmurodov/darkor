import React, { useEffect, useState } from 'react'
import { instance } from '../../../redux/actions'
import { UploadedImg } from '../../../styles'

const PostAdd = () => {
    const [titleUz, setTitleUz] = useState("")
    const [titleRu, setTitleRu] = useState("")
    const [titleEn, setTitleEn] = useState("")
    const [descriptionUz, setDescriptionUz] = useState("")
    const [descriptionRu, setDescriptionRu] = useState("")
    const [descriptionEn, setDescriptionEn] = useState("")
    const [youtubeLink, setYoutubeLink] = useState("")
    const [galleryUz, setGalleryUz] = useState({})
    const [galleryRu, setGalleryRu] = useState({})
    const [galleryEn, setGalleryEn] = useState({})
    const [type, setType] = useState("")

    const postHandleFileUz = (e) => {
        console.log(e);
        const formData = new FormData()
        formData.append("file", e)

        instance.post("/upload/MEDIA", formData).then((res) => {
            console.log(res.data.body);
            setGalleryUz({ ...res.data.body })
            alert("Postfile uz muvaffaqiyatli yuklandi")
        }).catch((err) => {
            console.log(err);
        })
    }
    const postHandleFileRu = (e) => {
        console.log(e);
        const formData = new FormData()
        formData.append("file", e)

        instance.post("/upload/MEDIA", formData).then((res) => {
            console.log(res.data.body,"dfdfdf");
            setGalleryRu({ ...res.data.body })
            alert("Postfile ru muvaffaqiyatli yuklandi")
        }).catch((err) => {
            console.log(err);
        })
    }
    const postHandleFileEn = (e) => {
        console.log(e);
        const formData = new FormData()
        formData.append("file", e)

        instance.post("/upload/MEDIA", formData).then((res) => {
            console.log(res.data.body);
            setGalleryEn({ ...res.data.body })
            alert("Postfile en muvaffaqiyatli yuklandi")
        }).catch((err) => {
            console.log(err);
        })
    }
    

    const submit = (e) => {
        e.preventDefault()
        instance.post('/api/v1/post/add/', {
            titleUz: `${titleUz}`,
            titleRU: `${titleRu}`,
            titleEn: `${titleEn}`,
            descriptionUz: `${descriptionUz}`,
            descriptionRu: `${descriptionRu}`,
            descriptionEn: `${descriptionEn}`,
            youTubeVideo: `${youtubeLink}`,
            galleryUz: { ...galleryUz },
            galleryRu: { ...galleryRu },
            galleryEn: { ...galleryEn },
            postType: `${type}`
        }).then((res) => {
            alert(
                "Post muvaffaqiyatli saqlandi"
            )
            console.log(res.data);
        }).catch((err) => console.log(err))
    }
    return (
        <div className='row' >
            <h3>Post Add</h3>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <label htmlFor='titleUz'>TitleUz</label>
                    <input
                        required
                        type='text'
                        className='form-control'
                        id='titleUz'
                        aria-describedby='emailHelp'
                        placeholder='Name'
                        onChange={(e) => setTitleUz(e.target.value)}
                        name='titleUz'
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
                        onChange={(e) => setTitleRu(e.target.value)}
                        name='titleRU'
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
                        onChange={(e) => setTitleEn(e.target.value)}
                        name='titleEn'
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
                        onChange={(e) => setDescriptionUz(e.target.value)}
                        name='descriptionUZ'
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
                        onChange={(e) => setDescriptionRu(e.target.value)}
                        name='descriptionRu'
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
                        onChange={(e) => setDescriptionEn(e.target.value)}
                        name='descriptionEn'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="selectType">Select Type </label>
                    <select
                        name="type"
                        id="selectType"
                        className="form-control"
                        required
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Type tanlang</option>
                        <option value="HOME" name="type">
                            HOME
                        </option>
                        <option value="SERVICE" name="type">
                            SERVICE
                        </option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor='galleryUz'>galleryUz</label>
                    <input type="file" className="form-control" onChange={(e) => postHandleFileUz(e.target.files[0])} />
                    <div className='mt-2'>
                        {
                            galleryUz.url && <UploadedImg src={galleryUz?.url} alt="" />
                        }
                    </div>
                </div>
                <br />
                <div>
                    <label htmlFor='galleryRu'>galleryRu</label>
                    <input type="file" className="form-control" onChange={(e) => postHandleFileRu(e.target.files[0])} />
                    <div className='mt-2'>
                        {
                            galleryRu.url && <UploadedImg src={galleryRu?.url} alt="" />
                        }
                    </div>
                </div>
                <br />
                <div>
                    <label htmlFor='galleryEn'>galleryEn</label>
                    <input type="file" className="form-control" onChange={(e) => postHandleFileEn(e.target.files[0])} />
                    <div className='mt-2'>
                        {
                            galleryEn.url && <UploadedImg src={galleryEn?.url} alt="" />
                        }
                    </div>
                </div>
                <br />
                <div className='form-group'>
                    <label htmlFor='youTubeVideo'>
                        youTubeVideo
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='youTubeVideo'
                        aria-describedby='emailHelp'
                        placeholder='Name'
                        onChange={(e) => setYoutubeLink(e.target.value)}
                        name='youTubeVideo'
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

export default PostAdd
