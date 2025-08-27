import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  // const nome = 'Felipe';
  // function showNome(){
  //   return nome
  // }
  // const pessoa = {
  //   nome: 'Maria'
  // }
  // let estaDeDia = true;

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  const [nomeUsuario, setNomeUsuario ] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => {setNomeUsuario(e.target.value)}} />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={
        ()=>{
        setFormularioEstaVisivel(!formularioEstaVisivel)
        }
      } type="button">toggle form</button>
      <h1>Olá, {nome}</h1>
      <h2>Olá, {pessoa.nome}</h2>
      {estaDeDia ? 'está de dia' : 'está de noite'} */}
    </>
  )
}

export default App
