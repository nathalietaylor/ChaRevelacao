import { useNavigate } from "react-router-dom";
import "../styles/Intro1.css";

export default function Intro1() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="popup">
        <div className="popup-header">
          <span className="title">Mensagem</span>
        </div>
        <div className="popup-body">
          <p>
            Você foi convidado para <br />
            meu chá revelação 🎉 <br />
            Parabéns! Você é <br />
            importante para mim ❤️
          </p>
          <button onClick={() => navigate("/intro2")}>Continuar</button>
        </div>
      </div>
    </div>
  );
}
