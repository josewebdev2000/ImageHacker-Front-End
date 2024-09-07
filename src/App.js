// Implement Router in App.js
import { Routes, Route } from "react-router-dom";

// Import Route Screens
import Home from "./routes/Home/Home.route";
import Choices from "./routes/Choices/Choices.route";

function App() {
  return (
    <Routes>
      <Route index path="/" element={< Home/>}/>
      <Route path="/choices" element={< Choices />} />
    </Routes>
  );
}

export default App;
