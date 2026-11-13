// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import ErrorBoundary from "./components/ErrorBoundary";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
