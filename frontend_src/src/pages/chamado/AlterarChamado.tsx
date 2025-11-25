import React, { useEffect, useState } from "react";
import { Chamado } from "../../interfaces/Chamado";

const AlterarChamado: React.FC = () => {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  function carregarChamados() {
    fetch("http://localhost:5000/api/chamado/listar")
      .then((response) => response.json())
      .then((data) => {
        setChamados(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    carregarChamados();
  }, []);

  function alterarStatus(chamadoId: string) {
    const chamado = { chamadoId: chamadoId };

    fetch("http://localhost:5000/api/chamado/alterar", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chamado),
    })
      .then((response) => response.json())
      .then(() => {
        carregarChamados();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Alterar Status de Chamado</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((c) => (
            <tr key={c.chamadoId}>
              <td>{c.chamadoId}</td>
              <td>{c.descricao}</td>
              <td>{c.status}</td>
              <td>
                <button onClick={() => alterarStatus(c.chamadoId)}>
                  Alterar Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlterarChamado;
