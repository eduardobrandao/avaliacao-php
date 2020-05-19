import React from "react";
import Header from "./Header";
import "./style.css";
import "./global.css";
import api from "./api";
import Main from "./pages";
import Cadastro from "./Cadastro";

const App = () => (
    <div className="App">
        <Header />
        <Main />
        <Cadastro />
    </div>
);

export default App;
