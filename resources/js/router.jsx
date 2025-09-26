import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Colegio
import ColegioInicio from "./pages/colegios/Inicio.jsx";
import ColegioSedes from "./pages/colegios/Sedes.jsx";
import ColegioBlog from "./pages/colegios/Blog.jsx";
import ColegioNosotros from "./pages/colegios/Nosotros.jsx";
import ColegioContacto from "./pages/colegios/Contacto.jsx";
import ColegioGuiaPago from "./pages/colegios/GuiaPago.jsx";
import ColegioFAQ from "./pages/colegios/PreguntasFrecuentes.jsx";

// Academia
import AcademiaInicio from "./pages/academias/Inicio";
import AcademiaSedes from "./pages/academias/Sedes";
import AcademiaNosotros from "./pages/academias/Nosotros";
import AcademiaTutoriales from "./pages/academias/Tutoriales";
import AcademiaBlog from "./pages/academias/Blog";
import SimulacroIndex from "./pages/academias/Simulacros/Index";
import SimulacroSM from "./pages/academias/Simulacros/SM";
import SimulacroPUCP from "./pages/academias/Simulacros/Pucp";
import SimulacroUNI from "./pages/academias/Simulacros/Uni";
import SolucionarioIndex from "./pages/academias/Solucionarios/Index";
import SolucionarioSM from "./pages/academias/Solucionarios/SM";
import SolucionarioPUCP from "./pages/academias/Solucionarios/Pucp";
import SolucionarioUNI from "./pages/academias/Solucionarios/Uni";
import AcademiaFAQ from "./pages/academias/PreguntasFrecuentes";
import AcademiaGuiaPago from "./pages/academias/GuiaPago";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Colegio
      { path: "colegio", element: <ColegioInicio /> },
      { path: "colegio/sedes", element: <ColegioSedes /> },
      { path: "colegio/blog", element: <ColegioBlog /> },
      { path: "colegio/nosotros", element: <ColegioNosotros /> },
      { path: "colegio/contacto", element: <ColegioContacto /> },
      { path: "colegio/guia-pago", element: <ColegioGuiaPago /> },
      { path: "colegio/faq", element: <ColegioFAQ /> },

      // Academia
      { path: "academia", element: <AcademiaInicio /> },
      { path: "academia/sedes", element: <AcademiaSedes /> },
      { path: "academia/nosotros", element: <AcademiaNosotros /> },
      { path: "academia/tutoriales", element: <AcademiaTutoriales /> },
      { path: "academia/blog", element: <AcademiaBlog /> },
      { path: "academia/simulacros", element: <SimulacroIndex /> },
      { path: "academia/simulacros/sm", element: <SimulacroSM /> },
      { path: "academia/simulacros/pucp", element: <SimulacroPUCP /> },
      { path: "academia/simulacros/uni", element: <SimulacroUNI /> },
      { path: "academia/solucionarios", element: <SolucionarioIndex /> },
      { path: "academia/solucionarios/sm", element: <SolucionarioSM /> },
      { path: "academia/solucionarios/pucp", element: <SolucionarioPUCP /> },
      { path: "academia/solucionarios/uni", element: <SolucionarioUNI /> },
      { path: "academia/faq", element: <AcademiaFAQ /> },
      { path: "academia/guia-pago", element: <AcademiaGuiaPago /> },
    ],
  },
]);

export default router;
