import React, { useState } from "react";

const CadastrarChamado: React.FC = () => {
  const [descricao, setDescricao] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novoChamado = {
      descricao: descricao
    };

    fetch("http://localhost:5000/api/chamado/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoChamado),
    })
      .then((response) => response.json())
      .then(() => {
        setDescricao("");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Cadastrar Chamado</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Descrição:
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarChamado;
