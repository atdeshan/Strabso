// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ErrorBoundary from "./components/ErrorBoundary";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/Strabso">
        <div className="App">
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
