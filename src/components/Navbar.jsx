import { useState } from "react";
import navbarlogo from "../images/yso-store.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../Styles/Global_Styles";

const theme = {
  responsive: {
    mobile: "768px",
  },
};
const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.7rem;
  height: 9rem;
  img {
    width: 20%;
  }
  @media (max-width: 768px) {
    height: 5rem;
    img {
      width: 30%;
    }
    div {
      display: block;
    }
    nav {
      position: absolute;
      display: flex;
      z-index: 999;
      top: 5rem;
      left: 0px;
      width: 100%;
      height: 0vh;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      transition: 0.7s ease;
      ul {
        gap: 2rem;
        flex-direction: column;
        li {
          font-size: 2rem;
          a {
            color: #4e6c50;
          }
        }
      }
    }
    .active {
      height: 70vh;
    }
  }
`;

const NavLinksContainer = styled.nav`
  ul {
    display: flex;
    gap: 1.6rem;
    font-size: 1.7rem;
    font-weight: 900;
    li {
    }
  }
`;
const MenuBar = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
`;
const Navbar = () => {
  const [active, setactive] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar className="bg">
          <img src={navbarlogo} alt="" />
          <MenuBar
            className="btn-color"
            onClick={() => setactive((prevState) => !prevState)}
          >
            {active === false ? <FaBars /> : <FaTimes />}
          </MenuBar>
          <NavLinksContainer
            className={active === true ? "mob-btn active" : "mob-btn"}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/More">More</NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <FaShoppingCart />
                </NavLink>
              </li>
            </ul>
          </NavLinksContainer>
        </NavBar>
        <Outlet />
      </>
    </ThemeProvider>
  );
};
export default Navbar;
