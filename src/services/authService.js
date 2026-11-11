const AUTH_URL = import.meta.env.VITE_AUTH_API_URL;

export async function login(credenciales) {
  const response = await fetch(`${AUTH_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credenciales),
  });
  if (!response.ok) throw new Error("Credenciales inválidas");
  return response.json();
}
