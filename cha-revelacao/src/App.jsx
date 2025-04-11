import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro1 from "./pages/Intro1";
import Intro2 from "./pages/Intro2";
import RespostaAutista from "./pages/RespostaAutista";
import RespostaEstranha from "./pages/RespostaEstranha";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro1 />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/resposta/autista" element={<RespostaAutista />} />
        <Route path="/resposta/estranha" element={<RespostaEstranha />} />
      </Routes>
    </Router>
  );
}

export default App;
