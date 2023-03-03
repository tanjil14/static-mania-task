import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
