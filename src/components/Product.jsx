import Cart from "./combinedPages/Cart";
import { useGetProductsQuery } from "../services/Products";
import DotLoader from "react-spinners/cjs/DotLoader";
import { GlobalStyle } from "../Styles/Global_Styles";
import styled from "styled-components";
function Product() {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <>
      <GlobalStyle />
      <div className="Comn-Heading">
        <h1>Products</h1>
      </div>
      {isLoading ? (
        <Center>
          <DotLoader className="innerCenter" color="#36d7b7" />
        </Center>
      ) : data ? (
        <Cart />
      ) : error ? (
        <h1>error</h1>
      ) : null}
    </>
  );
}
export default Product;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;
