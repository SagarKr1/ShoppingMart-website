import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/user-auth/login";
import Signup from "./components/user-auth/signup";
import Header from "./layout/Header/Header";
import Home from "./components/Pages/Home";
import Page404 from "./page404";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
