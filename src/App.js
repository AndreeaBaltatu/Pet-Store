import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { Home } from "./features";
import { Dogs } from "./features/Dogs";
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
      </Routes>
    </BrowserRouter>
  );
}
export { App };
