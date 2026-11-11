import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  async function enviar(e) {
    e.preventDefault(); setError(""); setEnviando(true);
    try {
      const sesion = await login({ correo, password });
      sessionStorage.setItem("token", sesion.token);
      sessionStorage.setItem("usuario", JSON.stringify({
        correo: sesion.correo, rol: sesion.rol
      }));
      navigate("/actividades");
    } catch {
      setError("No fue posible iniciar sesión");
    } finally { setEnviando(false); }
  }

  return (
    <main className="container py-4">
      <h1>Iniciar sesión</h1>
      <form onSubmit={enviar}>
        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" value={correo}
          onChange={e => setCorreo(e.target.value)} required />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" value={password}
          onChange={e => setPassword(e.target.value)} required />
        {error && <p role="alert">{error}</p>}
        <button disabled={enviando}>
          {enviando ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </main>
  );
}
