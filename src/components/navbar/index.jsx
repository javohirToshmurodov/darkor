import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import CallIcon from "../../assets/icons/Call.png";
import "../../styles/navbar.css";
import { Form } from "react-bootstrap";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
function OffcanvasExample() {
  const { t, i18next } = useTranslation();
  const menu = [
    {
      name: "Курсы",
      link: "/courses",
      dropdown: [
        {
          name: "All courses",
          link: "/courses",
        },
      ],
    },
    {
      name: "Услуги",
      link: "/services",
      dropdown: [],
    },
    {
      name: "Эксперты",
      link: "/experts",
      dropdown: [],
    },
    {
      name: "Компания",
      link: "/about",
      dropdown: [],
    },
    {
      name: "Контакты",
      link: "/contact",
      dropdown: [],
    },
  ];

  const languages = [
    {
      code: "uz",
      name: "UZ",
      country_code: "uz",
    },
    {
      code: "ru",
      name: "RU",
      country_code: "ru",
    },
    {
      code: "en",
      name: "EN",
      country_code: "en ",
    },
  ];
  const navigate = useNavigate();
  const changeLanguage = (e) => {
    // console.log(e.target.value);
    // i18next.changeLanguage(e.target.value);
    i18n.changeLanguage(e);
    console.log(`language ${e} ga o'zgardi`);
    localStorage.setItem("language", e);
    return () => {
      console.log(`language ${e} ga o'zgardi`);
    };
  };
  return (
    <Container>
      <Navbar className="my-4" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Link to={"/"}>
            <Logo className="me-4" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto align-items-center">
              {menu.map((item, index) =>
                item.dropdown.length ? (
                  <NavDropdown
                    key={index}
                    title={item.name}
                    id="collasible-nav-dropdown"
                  >
                    {item.dropdown.map((menu, index) => (
                      <NavDropdown.Item
                        key={index}
                        onClick={() => navigate(menu.link)}
                      >
                        {menu.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Link key={index} to={item.link} className="nav-link mx-2">
                    {item.name}
                  </Link>
                )
              )}
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              <Form.Select onChange={(e) => changeLanguage(e.target.value)}>
                {
                  // languages.map(({ code, name, country_code }) => {
                  //   <Dropdown.Item href="#" key={country_code}>
                  //     <p>javohri</p>
                  //     {console.log(name, code)}
                  //   </Dropdown.Item>;
                  // })

                  languages.map((e, i) => (
                    <option value={e.code}>{e.name}</option>
                  ))
                }
              </Form.Select>

              <div className="line ms-2 d-sm-none d-lg-block"></div>
              <Nav.Link
                className="d-flex justify-content-center align-items-center"
                href="tel:998998974544"
              >
                <span className="phone">
                  <img src={CallIcon} alt="img" />
                </span>
                <div className="phone_container">
                  Администратор <span>+998 99 897-45-44</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default OffcanvasExample;
