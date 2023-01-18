import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Journey from "./Pages/Journey";
import Product from "./Pages/Product";
import Store from "./Pages/Store";
import Team from "./Pages/Team";
import Error from "./Pages/Error";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/store" element={<Store />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
