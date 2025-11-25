import React, { useEffect, useState } from "react";
import { Chamado } from "../../interfaces/Chamado";

const ListarChamados: React.FC = () => {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/chamado/listar")
      .then((response) => response.json())
      .then((data) => {
        setChamados(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista de Chamados</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Criado em</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((c) => (
            <tr key={c.chamadoId}>
              <td>{c.chamadoId}</td>
              <td>{c.descricao}</td>
              <td>{new Date(c.criadoEm).toLocaleDateString()}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarChamados;
