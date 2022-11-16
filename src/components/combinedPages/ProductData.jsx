import { useGetProductsidQuery } from "../../services/Products";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Styles/Global_Styles";
import {
  FaArrowLeft,
  FaShareAlt,
} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import RaitingStar from "./RaitingStar";

function ProductData() {
  const navigate = useNavigate();
  const backbtn = () => {
    navigate(-1);
  };
  const params = useParams();
  const { id } = params;
  const { data } = useGetProductsidQuery(id);
  const { image, name, description, price, reviews, stars, stock, company } =
    data;
  return (
    <>
      <GlobalStyle />
      <Container>
        <div>
          <div>
            <h1>{name}</h1>
            <div>
              <RaitingStar stars={stars} reviews={reviews} />
            </div>
          </div>

          <p>{description}</p>
        </div>

        <Carousel
          className="carosole"
          labels={false}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <img src={image[0].url} alt={image[0].filename} />
          </div>
          <div>
            <img src={image[1].url} alt={image[1].filename} />
          </div>
          <div>
            <img src={image[0].url} alt={image[0].filename} />
          </div>
          <div>
            <img src={image[3].url} alt={image[3].filename} />
          </div>
        </Carousel>
        <BackBtn>
          <button className="color" onClick={backbtn}>
            <FaArrowLeft className="center" />
          </button>
        </BackBtn>
        <Sharebtn>
          <button className="color">
            <FaShareAlt className="center" />
          </button>
        </Sharebtn>

        <h2>{price}</h2>
        <h2>{company}</h2>
        <h2>{stock}</h2>
        <h2>{stars}</h2>
      </Container>
    </>
  );
}
export default ProductData;
const Container = styled.div`
  position: relative;
  .carosole ul {
    display: none;
    background: green;
  }
`;
const BackBtn = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  button {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    color: #fff;
    padding: 1rem;
    border-radius: 100%;
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const Sharebtn = styled.div`
  position: absolute;
    right: 1rem;
  top: 12rem;
  button {
    background: #fff;
    border: none;
    color: #000;
    padding: 1rem;
    border-radius: 100%;
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `;
