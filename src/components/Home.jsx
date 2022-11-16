import styled, { ThemeProvider } from "styled-components";
import homeimage from "../images/Home.jpg";
import { useNavigate } from "react-router-dom";

import { GlobalStyle } from "../Styles/Global_Styles";

const theme = {
  responsive: {
    mobile: "768px",
  },
};
const Header = styled.section`
  display: flex;
  gap: 8rem;
  padding: 0rem 2rem;
  align-items: center;
  margin: 2rem 0rem;
  @media (max-width: ${theme.responsive.mobile}) {
    flex-wrap: wrap;
    .innerText {
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
const Text = styled.div`
  h1 {
    font-size: 5rem;
    border-bottom: 2px solid;
  }
  p {
    margin: 1rem 0 2rem 0;
    font-size: 1.1rem;
    text-align: center;
  }
`;
const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const pageNavigate = () => {
    navigate("/Products");
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header>
          <Text className="innerText">
            <h1 className="color">YSO STORE</h1>
            <p className="pg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Errorhc
              nemo, ducimus. Optio nisi deleniti perspiciatis ea et ab, facilis
              necessitatibus.
            </p>
            <div>
              <button className="btn" onClick={() => pageNavigate()}>
                GO TO PRODUCTS
              </button>
            </div>
          </Text>
          <Img>
            <img src={homeimage} alt="home.jpg" />
          </Img>
        </Header>
        <div className="Comn-Heading">
          <h1>Discover New Product</h1>
        </div>
      </ThemeProvider>
    </>
  );
};
export default Home;
