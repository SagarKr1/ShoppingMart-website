import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/user-auth/login";
import Signup from "./components/user-auth/signup";
import Header from "./layout/Header/Header";
import Home from "./components/Pages/Home/Home";
import Category from "./components/Pages/Category/Category";
import Brand from "./components/Pages/Brands/Brand";
import Product from "./components/Pages/Product/Product";
import Page404 from "./page404";
import Footer from "./layout/footer/footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category" element={<Category />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
