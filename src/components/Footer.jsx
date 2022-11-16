import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../Styles/Global_Styles";
const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <Container className="bg">
        <FeatureProduct>
          <div className="heading">
            <h1 className="btn-color">Feature Products</h1>
          </div>
          <ul>
            <li>Mobile</li>
            <li>Furniture</li>
            <li>Electronic</li>
            <li>Clothes</li>
            <li>Shoes</li>
          </ul>
        </FeatureProduct>
        <NavLinksContainer>
          <div className="heading">
            <h1 className="btn-color">NavLinks</h1>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/More">More</NavLink>
            </li>
          </ul>
        </NavLinksContainer>
        <Subscribe>
          <div className="heading">
            <h1 className="btn-color">Subscribe Now</h1>
          </div>

          <input type="text" placeholder="Enter Your Email" />
          <button type="submit">SEND</button>
        </Subscribe>
      </Container>
      <Copyright className="bg">
        <h2>copyright 2022-2023</h2>
      </Copyright>
    </>
  );
};
export default Footer;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  ul {
    margin-left: 1rem;
    margin-top: 1rem;
    li {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 800;
      color: #fff;
    }
  }
  .heading {
    h1 {
      font-size: 2rem;
    }
  }
`;
const NavLinksContainer = styled.nav``;
const FeatureProduct = styled.div``;
const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-top: 1rem;
    outline: none;
    border: none;
    height: 3rem;
    width: 70%;
    background: #f0ebce;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    font-weight: 900;
    color: #4e6c50;
    &::placeholder {
      color: #4e6c50;
    }
  }
  button {
    width: 30%;
    height: 3rem;
    margin-top: 1rem;
    background: #aa8b56;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-weight: 900;
  }
`;
const Copyright = styled.div`
  text-align: center;
  border-top: 2px solid #fff;
  color: #fff;
  position: relative;
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  height: 3rem;
`;
