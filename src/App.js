import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import AddProduct from "./pages/ProductService/AddProduct";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import DeleteProduct from "./pages/ProductService/DeleteProduct";


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<p>Not Found</p>}></Route>
          <Route path="/AddProduct" element={<AddProduct/>}></Route>
          <Route path="/ProductDetail/:productId" element={<ProductDetail/>}></Route>
          <Route path="/DeleteProduct/:productId" element={<DeleteProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
