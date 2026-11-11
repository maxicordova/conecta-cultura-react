const ACTIVIDADES_URL = import.meta.env.VITE_ACTIVIDADES_API_URL;

async function request(ruta, opciones = {}) {
  const token = sessionStorage.getItem("token");
  const headers = { "Content-Type": "application/json", ...opciones.headers };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${ACTIVIDADES_URL}${ruta}`, { ...opciones, headers });
  if (!response.ok) throw new Error(`Solicitud rechazada: ${response.status}`);
  return response.status === 204 ? null : response.json();
}

export const listarActividades = () => request("/actividades");

export const buscarActividad = (id) => request(`/actividades/${id}`);

export const crearActividad = datos => request("/actividades", {
  method: "POST", body: JSON.stringify(datos)
});

export const actualizarActividad = (id, datos) => request(`/actividades/${id}`, {
  method: "PUT", body: JSON.stringify(datos)
});

export const eliminarActividad = id => request(`/actividades/${id}`, {
  method: "DELETE"
});


