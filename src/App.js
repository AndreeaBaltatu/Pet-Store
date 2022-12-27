import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { Home, Recenzii } from "./features";
import { Dogs, DogProductDetails } from "./features/Dogs";
import { Cats, CatProductDetails } from "./features/Cats";
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
        <Route path="/dogproducts/:productId" element={<DogProductDetails />} />
        <Route path="/catproducts/:productId" element={<CatProductDetails />} />
        <Route path="/recenzii" element={<Recenzii />} />
      </Routes>
    </BrowserRouter>
  );
}
export { App };
