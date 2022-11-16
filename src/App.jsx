import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductProfile from "./components/combinedPages/ProductProfile";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Products/:id" element={<ProductProfile />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
