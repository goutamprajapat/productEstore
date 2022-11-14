import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const Navigate = useNavigate();
  const Navi = () => {
   Navigate(-1)
  };
  return (
    <>
      <h1>Page Not Found</h1>
      <button onClick={() => Navi()}>Go Back</button>
    </>
  );
}
export default PageNotFound;
