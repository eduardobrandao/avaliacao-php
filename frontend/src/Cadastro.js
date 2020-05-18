import React from "react";

function Cadastro() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastro</strong>
        <form>
          <div className="input-block">
            <label htmlFor="">Nome</label>
            <input name="nome" id="nome" required />
          </div>
          <div className="input-block">
            <label htmlFor="">Endereço</label>
            <input name="endereço" id="endereço" />
          </div>
          <div className="input-block">
            <label htmlFor=""> Email </label>
            <input name="email" id="email" required />
          </div>
          <div className="input-block">
            <label htmlFor=""> Senha </label>
            <input name="senha" id="senha" required />
          </div>
          <div className="input-block">
            <label htmlFor="">Confirme a senha</label>
            <input name="senha" id="senha" />
          </div>
          <div className="input-block">
            <label htmlFor="">Email para recuperação de senha</label>
            <input name="email" id="email" required />
          </div>
          <button type="submit"> Salvar </button>
          <a className="App-link" href="/" rel="noopener noreferrer">
            Fazer Login
          </a>
        </form>
      </aside>
    </div>
  );
}

export default Cadastro;
