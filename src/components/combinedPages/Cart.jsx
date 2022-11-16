import { useGetProductsQuery } from "../../services/Products";
import { GlobalStyle } from "../../Styles/Global_Styles";
import { FaRupeeSign } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data } = useGetProductsQuery();

  return (
    <>
      <GlobalStyle />
      <Container>
        {data.map((index) => {
          const { id } = index;
          return (
            <Selection as={Link} to={`/Products/${id}`} key={id}>
              <div className="img-div">
                <img src={index.image} alt="images" />
              </div>
              <Text className="bg">
                <h1 className="btn-color ">{index.name}</h1>
                <p>{index.description.slice(0, 99)}....</p>
                <h4>
                  <FaRupeeSign />
                  {index.price}
                </h4>
              </Text>
            </Selection>
          );
        })}
      </Container>
    </>
  );
};
export default Cart;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
`;
const Selection = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.4s ease;
  &:hover {
    box-shadow: 0px 0px 5px 0px #aa8b56;
  }
  .img-div {
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 20rem;
      scale: 1.1;
    }
  }
`;
const Text = styled.div`
  padding: 0.8rem;
  height: 10rem;
  width: 100%;
  h1 {
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
  p {
    color: #fff;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  h4 {
    top: 1.5rem;
    display: flex;
    align-items: center;
    left: 1.5rem;
    background: rgba(25, 0, 0, 0.4);
    border-radius: 0.4rem;
    padding: 0.4rem 0.8rem;
    position: absolute;
    color: #fff;
    font-size: 1.3rem;
  }
`;
