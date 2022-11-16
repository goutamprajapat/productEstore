import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../Styles/Global_Styles";
import styled from "styled-components";
import notfound from "../images/notfound.gif";
function PageNotFound() {
  const Navigate = useNavigate();
  const Navi = () => {
    Navigate(-1);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={notfound} alt="notfound.hif" />
        <h1 className="color">Page Not Found</h1>

        <button className="bg btn-color " onClick={() => Navi()}>
          Go Back
        </button>
      </Container>
    </>
  );
}
export default PageNotFound;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  img {
    width: 90%;
  }
  h1 {
    font-size: 6rem;
    margin-top: -4rem;
  }
  button {
    border: none;
    padding: 0.8rem 1.5rem;
		border-radius: .5rem;
    font-weight: 900;
    margin-top: 2rem;
    font-size: 2rem;
    pointer: courser;
  }
`;
