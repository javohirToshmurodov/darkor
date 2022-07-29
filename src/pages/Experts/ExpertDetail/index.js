import { useEffect , useState } from 'react'
import { Spin } from 'antd'
import { useParams } from 'react-router-dom'
import CarouselSlider from '../../../components/Carousel'
import { instance } from '../../../redux/actions'
import { useTranslation } from 'react-i18next'
import Footer from '../../../components/Footer'
import ContactWithUs from '../../../components/ContactWithUs'
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
    console.log(employee,"dsfdsfsd");
    return (
        <Spin spinning={loading}>
            <div className='container'>
                {/* <CarouselSlider /> */}
                <div className='container'>
                    <p className='text-base font-semibold uppercase'>{t("descriptionExpert")}</p>
                    {
                        <h1>{employee?.titleDescription}</h1>
                    }
                </div>
            </div>
        </Spin>
    );
}

export default ExpertDetail;