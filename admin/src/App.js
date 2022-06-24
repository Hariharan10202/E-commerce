import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AddProduct from "./Routes/AddProduct/AddProduct";
import Login from "./Pages/Login/Login";
import ViewProduct from "./Routes/ViewProduct/ViewProduct";
import Product from "./Routes/Product.jsx/Product";

function App() {
  const user = true;

  return (
    <div className="App">
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route exact path="/" element={user && <Home />} />
          <Route path="/login" element={!user && <Login />} />
          <Route path="/addproduct" element={user && <AddProduct />} />
          <Route path="/view" element={user && <ViewProduct />} />
          <Route path="/view/:id" element={<Product />} />
          <Route path="/view/:id/:id" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
