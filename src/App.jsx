import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
