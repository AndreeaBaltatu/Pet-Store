import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { Home } from "./features";
import { Dogs, ProductDetails } from "./features/Dogs";
import { Cats } from "./features/Cats";
import { Adoption } from "./features/Adoption";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/dogproducts/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export { App };
