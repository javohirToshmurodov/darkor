import { Spin } from 'antd'
import { useParams } from 'react-router-dom'
import CarouselSlider from '../../../components/Carousel'
import { instance } from '../../../redux/actions'
import { useTranslation } from 'react-i18next'
import Footer from '../../../components/Footer'
import ContactWithUs from '../../../components/ContactWithUs'

function ExpertDetail(props) {
    const setActiveLink = ({ isActive }) => (isActive ? "active-link" : "");
    const [employeeDetail, setEmployeeDetails] = useState({})
    const [employees, setEmployees] = useState([])
    const { id } = useParams()
    const [data, setData] = useState([])
    const [employee, setEmployee] = useState({})
    const [expert, setExpert] = useState({})
    const [active, setActive] = useState(false)
    const [loading, setLoading] = useState(true)
    const getExperts = () => {
        setLoading(true)
        instance.get("http://172.105.136.151:8080/api/v1/employee/list/expert?size=10&page=1&lang=uz").then((res) => {
            console.log("1", res.data.body);
            setExpert([...res.data.body])
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getExperts()
    }, [])
    const getEmployeeDetails = () => {
        expert?.code && instance.get(`/api/v1/employee_detail/get_by_employee/${expert?.code}`).then((res) => {
            console.log("2", res.data.body);
            setEmployee([...res.data.body])
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getEmployeeDetails()
        console.log("expert", expert?.code);
    }, [expert?.code])
    return (
        <Spin spinning={loading}>
            <div className='container'>
                {/* <CarouselSlider /> */}
                1
            </div>
        </Spin>
    );
}

export default ExpertDetail;