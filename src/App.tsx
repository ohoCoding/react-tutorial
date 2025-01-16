import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./components/Tab";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2/idnex";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Tabs />
        <div className="content">
          <Routes>
            <Route path="/day1" element={<Day1 />} />
            <Route path="/day2" element={<Day2 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
