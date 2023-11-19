import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes></Routes>
    </BrowserRouter>
  );
}
export { App };
