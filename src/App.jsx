import FirstPage from "./pages/firstpage/FirstPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SecondPage from "./pages/secondpage/SecondPage";
import ThirdPage from "./pages/thirdpage/ThirdPage";

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<FirstPage />}></Route>
      <Route path="/chatbot" element={<SecondPage />}></Route>
      <Route path="/confirmation" element={<ThirdPage />}></Route>
    </Routes>
    // </Router>
  );
}

export default App;
