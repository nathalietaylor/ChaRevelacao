// src/pages/RespostaEstranha.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Resposta.css";

export default function RespostaEstranha() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="popup">
        <div className="popup-header">
          <span className="title">Erro</span>
        </div>
        <div className="popup-body">
          <p>
            ❌ Que pena! Resposta errada... <br />
            Mas tudo bem, enganei a sociedade por mais de 30 anos... Você foi só
            mais um(a)
            <br />
            Tente novamente!
          </p>
          <button onClick={() => navigate("/intro2")}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
