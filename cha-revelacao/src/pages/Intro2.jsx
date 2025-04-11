import { useNavigate } from "react-router-dom";

export default function Intro2() {
  const navigate = useNavigate();

  return (
    <div className="janela">
      <h2>🚫 Não, não estou grávida.</h2>
      <p>
        Passei por meses em um processo de diagnóstico e agora você descobrirá
        se sou só estranha ou se vim com defeito de fábrica.
      </p>
      <p>Boa sorte!</p>
      <div>
        <button onClick={() => navigate("/resposta/autista")}>Autista</button>
        <button onClick={() => navigate("/resposta/estranha")}>Estranha</button>
      </div>
    </div>
  );
}
