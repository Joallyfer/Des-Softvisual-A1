import React, { useEffect, useState } from "react";
import { Chamado } from "../../interfaces/Chamado";

const ListarNaoResolvidos: React.FC = () => {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/chamado/naoresolvido")
      .then((response) => response.json())
      .then((data) => {
        setChamados(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Chamados Não Resolvidos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((c) => (
            <tr key={c.chamadoId}>
              <td>{c.chamadoId}</td>
              <td>{c.descricao}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarNaoResolvidos;
