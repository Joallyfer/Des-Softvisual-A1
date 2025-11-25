import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListarChamados from "./pages/chamado/ListarChamados";
import CadastrarChamado from "./pages/chamado/CadastrarChamado";
import AlterarChamado from "./pages/chamado/AlterarChamado";
import ListarResolvidos from "./pages/chamado/ListarResolvidos";
import ListarNaoResolvidos from "./pages/chamado/ListarNaoResolvidos";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/chamado/listar">Listar Chamados</Link>
            </li>
            <li>
              <Link to="/chamado/cadastrar">Cadastrar Chamado</Link>
            </li>
            <li>
              <Link to="/chamado/alterar">Alterar Chamado</Link>
            </li>
            <li>
              <Link to="/chamado/resolvidos">Resolvidos</Link>
            </li>
            <li>
              <Link to="/chamado/naoresolvido">Não Resolvidos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/chamado/listar" element={<ListarChamados />} />
          <Route path="/chamado/cadastrar" element={<CadastrarChamado />} />
          <Route path="/chamado/alterar" element={<AlterarChamado />} />
          <Route path="/chamado/resolvidos" element={<ListarResolvidos />} />
          <Route
            path="/chamado/naoresolvido"
            element={<ListarNaoResolvidos />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
