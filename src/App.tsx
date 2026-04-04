// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ErrorBoundary from "./components/ErrorBoundary";
import StarrySky from "./components/StarrySky";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/Strabso">
        <div className="App">
          <StarrySky />
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;