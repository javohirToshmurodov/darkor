import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Form from "react-bootstrap/Form";

import CallIcon from "../../assets/icons/Call.png";
import "../../styles/navbar.css";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function OffcanvasExample() {
  // const ln = localStorage.getItem("language")
  const { t, i18n } = useTranslation();
  const menu = [
    {
      name: t("navbar-1"),
      link: "/courses",
      dropdown: [],
    },
    {
      name: t("navbar-2"),
      link: "/services",
      dropdown: [],
    },
    {
      name: t("navbar-3"),
      link: "/experts",
      dropdown: [],
    },
    {
      name: t("navbar-4"),
      link: "/about",
      dropdown: [],
    },
    {
      name: t("navbar-5"),
      link: "/contact",
      dropdown: [],
    },
    {
      name: t("navbar-6"),
      link: "/employee",
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
    localStorage.setItem("language", e);
    i18n.changeLanguage(e);
    window.location.reload();
    return () => {
      console.log(`language ${e} ga o'zgardi`);
    };
  };
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"));
  }, []);

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
                  <Link key={index} to={item.link} className="mx-2 nav-link">
                    {item.name}
                  </Link>
                )
              )}
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              <Form.Select
                style={{ width: "70px" }}
                onChange={(e) => changeLanguage(e.target.value)}
                value={localStorage.getItem("language")}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
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
                  {t("admin")} <span>+998 99 897-45-44</span>
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
