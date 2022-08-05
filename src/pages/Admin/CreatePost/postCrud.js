import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { instance } from '../../../redux/actions';
import { CourseImgWrapper } from '../../../styles';
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const PostCrud = () => {
    const [postsHome, setPostsHome] = useState([])
    const [postsService, setPostsService] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);
    const [postId, setPostId] = useState("")
    const handleClose = () => setShow(false);
    const [size, setSize] = useState(10)
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const getPostsHome = () => {
        setLoading(true)
        instance.get(`/api/v1/post/list/HOME?size=${size}&page=0`).then((res) => {
            console.log(res.data.body);
            setPostsHome([...res.data.body])
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    }
    const getPostsService = () => {
        setLoading(true)
        instance.get(`/api/v1/post/list/SERVICE?size=${size}&page=0`).then((res) => {
            console.log(res.data.body);
            setPostsService([...res.data.body])
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    }
    const deletePost = (event, id) => {
        console.log(id);
        setLoading(true)
        instance.delete(`/api/v1/post/deleted/${id}`).then((res) => {
            console.log(res.data);
            alert("Kurs muvaffaqiyatli o'chirildi")
            getPostsHome()
            getPostsService()
        }).catch((err) => {
            console.log(err);
        })
    }
    const morePost = () => {
        setSize(size => size + 10)
    }
    useEffect(() => {
        getPostsHome()
        getPostsService()
    }, [size])

    const openEdit = (event, id) => {
        setPostId(id)
        navigate(`${id}`)
    }

    return (
        <Spin spinning={loading}>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th colSpan={4} className="text-center">Home</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>Post title</th>
                        <th>Post Description</th>
                        <th>Crud</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postsHome?.map((e, i) => <tr key={e.code}>
                            <td>{i + 1}</td>
                            <td className=''>
                                <div className="gap-3 d-flex">

                                    <CourseImgWrapper src={`${e?.gallery?.url}`} className="img-fluid" alt='rasm topilmadi' />
                                    {e.title}
                                </div>
                            </td>
                            <td>
                                {
                                    e.description
                                }
                            </td>
                            <td className=''>
                                <div className="gap-2 d-flex justify-content-center">

                                    <Button variant="warning" onClick={(event) => openEdit(event, e.id)}>
                                        <FaPenAlt />
                                    </Button>
                                    <Button variant="danger" onClick={(event) => deletePost(event, e.id)}>
                                        <FaTrashAlt />
                                    </Button>
                                </div>

                            </td>
                        </tr>)
                    }
                    {/* {
                  show ? <EditCouresModal id={courseId} show={show} handleClose={handleClose} handleShow={handleClose} /> : ""
               } */}
                </tbody>
            </Table>
            <div className="text-end">
                <button onClick={morePost} className="btn btn-dark">More...</button>
            </div>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th colSpan={4} className="text-center">Service</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>Post title</th>
                        <th>Post Description</th>
                        <th>Crud</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postsService?.map((e, i) => <tr key={e.code}>
                            <td>{i + 1}</td>
                            <td className=''>
                                <div className="gap-3 d-flex">

                                    <CourseImgWrapper src={`${e?.gallery?.url}`} className="img-fluid" alt='rasm topilmadi' />
                                    {e.title}
                                </div>
                            </td>
                            <td>
                                {
                                    e.description
                                }
                            </td>
                            <td className=''>
                                <div className="gap-2 d-flex justify-content-center">

                                    <Button variant="warning" onClick={(event) => openEdit(event, e.id)}>
                                        <FaPenAlt />
                                    </Button>
                                    <Button variant="danger" onClick={(event) => deletePost(event, e.id)}>
                                        <FaTrashAlt />
                                    </Button>
                                </div>

                            </td>
                        </tr>)
                    }
                    {/* {
                  show ? <EditCouresModal id={courseId} show={show} handleClose={handleClose} handleShow={handleClose} /> : ""
               } */}
                </tbody>
            </Table>
            <div className="text-end">
                <button onClick={morePost} className="btn btn-dark">More...</button>
            </div>
        </Spin>
    )
}

export default PostCrud