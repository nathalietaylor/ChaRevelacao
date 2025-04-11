// src/pages/Intro2.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Intro2.css";

export default function Intro2() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="popup">
        <div className="popup-header">
          <span className="title">Aviso</span>
        </div>
        <div className="popup-body">
          <p>
            Não, eu não estou grávida. <br />
            Passei por meses em um processo de diagnóstico e agora...
            <br />
            Você vai descobrir: <br />
            Sou só estranha ou vim com defeito de fábrica? 😅
          </p>
          <p>Boa sorte!</p>
          <div className="buttons">
            <button onClick={() => navigate("/resposta/estranha")}>
              Estranha
            </button>
            <button onClick={() => navigate("/resposta/autista")}>
              Autista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
