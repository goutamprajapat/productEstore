
import Cart from "./combinedPages/Cart";
//import axios from "axios";
import { useGetProductsQuery } from "../services/Products";
import { GlobalStyle } from "../Styles/Global_Styles";
function Product() {
  const { data, error, isLoading } = useGetProductsQuery();
  return (
    <>
      <GlobalStyle />
      <div className="Comn-Heading">
        <h1>Products</h1>
      </div>
      {isLoading ? (
        <h1>loading</h1>
      ) : data ? (
        <Cart />
      ) : error ? (
        <h1>error</h1>
      ) : null}
    </>
  );
}
export default Product;
