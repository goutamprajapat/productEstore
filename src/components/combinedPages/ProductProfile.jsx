import { useParams } from "react-router-dom";
import { useGetProductsidQuery } from "../../services/Products";
import styled from "styled-components";
import DotLoader from "react-spinners/cjs/DotLoader";
import ProductData from "./ProductData";
function ProductProfile() {
  const params = useParams();
  const { id } = params;
  const { data, error, isLoading } = useGetProductsidQuery(id);

  return (
    <>
      {isLoading ? (
        <Center>
          <DotLoader className="innerCenter" color="#36d7b7" />
        </Center>
      ) : data ? (
        <ProductData />
      ) : error.status ? (
        JSON.stringify(error.status)
      ) : null}
    </>
  );
}
export default ProductProfile;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;
