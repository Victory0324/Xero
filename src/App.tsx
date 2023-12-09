import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewCustomer from "./pages/NewCustomer";
import OldCustomer from "./pages/OldCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book" element={<NewCustomer />} />
        <Route path="customer" element={<OldCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
