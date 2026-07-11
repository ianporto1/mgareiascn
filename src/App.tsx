import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DicasConstrucao from './pages/DicasConstrucao';
import Faq from './pages/Faq';
import CalculadoraObra from './pages/CalculadoraObra';
import QualAreiaUsar from './pages/QualAreiaUsar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dicas-de-construcao-caldas-novas" element={<DicasConstrucao />} />
        <Route path="/qual-areia-usar" element={<QualAreiaUsar />} />
        <Route path="/duvidas-frequentes" element={<Faq />} />
        <Route path="/calculadora-de-obra" element={<CalculadoraObra />} />
      </Routes>
    </Router>
  );
}
