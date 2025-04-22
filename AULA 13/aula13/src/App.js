import React, { useState, useEffect } from 'react';

function App() {

  const [estados, setEstados] = useState([]);
  const [selecionado, setSelecionado] = useState([]);

  useEffect(() => {

    function carregarAPI() {
      fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((resultado) => resultado.json())
      .then((json) => {
        setEstados(json)
      })
    }

    carregarAPI();
  }, []);

  return (
    <div>
      <h2>Formulário de Contato</h2>
      <form>
        <div>
          <label>Nome: </label>
          <input />
        </div>
        <br />

        <div>
          <label>E-mail: </label>
          <input />
        </div>
        <br />

        <div>
          <label>Cidade: </label>
          <input />
        </div>
        <br />

        <div>
          <label>UF: </label>
          <select onChange={(e) => setSelecionado(e.target.value)}>
          <option value="0">Selecione o Estado</option>
          {estados.map(item => (<option key={item.sigla} value={item.nome}>{item.nome}</option>))}
          </select>
        </div>
        <br />
        <h1>{selecionado}</h1>
      </form>
    </div>
  );
}

export default App;