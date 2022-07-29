import { useEffect , useState } from 'react'
import { Spin } from 'antd'
import { useParams } from 'react-router-dom'
import CarouselSlider from '../../../components/Carousel'
import { instance } from '../../../redux/actions'
import { useTranslation } from 'react-i18next'
import Footer from '../../../components/Footer'
import ContactWithUs from '../../../components/ContactWithUs'
<<<<<<< HEAD
=======
import { useState, useEffect } from 'react'
>>>>>>> b322ffc5332497fe9aa6fd91c579bac9c8c128a1
function ExpertDetail(props) {
    const setActiveLink = ({ isActive }) => (isActive ? "active-link" : "");
    const { t, i18n } = useTranslation()
    const { code } = useParams()
    const [employee, setEmployee] = useState({})
    const [loading, setLoading] = useState(false)
    const getEmployeeDetails = () => {
        setLoading(true)
        instance.get(`/api/v1/employee_detail/get_by_employee/${code}`).then((res) => {
            console.log("2", res.data.body);
            setEmployee({ ...res.data.body })
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getEmployeeDetails()
    }, [code])
    return (
        <Spin spinning={loading}>
            <div className='container divide-y-2 divide-gray-300 '>
                {/* <CarouselSlider /> */}
                <div className='container'>
                    <p className='text-base font-semibold uppercase'>{t("descriptionExpert")}</p>
                    {
                        <h1 className='font-bold text-[44px] leading-[56px]'>{employee?.titleDescription}</h1>
                    }
                    {
                        <p className='text-xl font-normal' >{employee?.bodyDescription}</p>
                    }
                    <div className='flex items-center gap-10'>
                        {
                            employee?.galleries?.map((e, i) => < img className='img-fluid rounded-3xl w-[345px]' key={e.id} src={e.url} />)
                        }
                        <div>
                            {
                                employee?.employee?.courses?.map((e, i) =>
                                    < p key={e.id} className='text-base font-normal'> {t("expert")} {e.name}</p>
                                )
                            }
                            {
                                <h1 className='font-bold text-[32px] leading-10'>{employee?.employee?.fullName}</h1>
                            }
                            {
                                employee?.employee?.courses?.map((e, i) =>
                                    < p key={e.id} className='text-xl font-semibold'>{e.description}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='pt-5 mt-5'>Skills</div>
            </div>
        </Spin >
    );
}

export default ExpertDetail;