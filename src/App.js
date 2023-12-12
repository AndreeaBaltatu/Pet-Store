import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import { Programare, Servicii } from "./features";
import { Home } from "./features";
import { Preturi } from "./features";
import { Contact } from "./features";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/programare" element={<Programare />} />
        <Route path="/servicii" element={<Servicii />} />
        <Route path="/preturi" element={<Preturi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export { App };
