import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Actividades from "./pages/Actividades";
import DetalleActividad from "./pages/DetalleActividad";
import AdminActividades from "./pages/admin/AdminActividades";
import NoEncontrada from "./pages/NoEncontrada";
import Navegacion from "./components/Navegacion";
import ActividadForm from "./pages/ActividadForm";
import RutaProtegida from "./components/RutaProtegida";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route element={<RutaProtegida rol="ADMIN" />}>
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividades/:id" element={<DetalleActividad />} />
          <Route path="/admin/actividades" element={<AdminActividades />} />
          <Route path="/admin/actividades/nueva" element={<ActividadForm />} />
          <Route path="/admin/actividades/:id/editar" element={<ActividadForm />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </>
  );
}

export default App;
