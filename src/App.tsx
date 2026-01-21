// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import StarrySky from "./components/StarrySky";
import Landing from "./pages/Landing";
import MainContent from "./components/MainContent";

function App() {
  return (
    <BrowserRouter basename="/Strabso">
      <div className="App">
        <StarrySky />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<MainContent />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;