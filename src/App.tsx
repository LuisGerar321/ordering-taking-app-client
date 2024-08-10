import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Clients } from "./views/Clients";
import { Products } from "./views/Products";
import { Ordering } from "./views/Ordering";
import { Main } from "./components/layout/Main";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/clients" element={<Clients></Clients>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/ordering" element={<Ordering></Ordering>}></Route>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
