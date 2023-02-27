import { useState } from 'react';
import HomePage from './components/homePage';
import Formulario from './components/form';

import logo from './NuKenzie.png'
import imgDecorativa from './imgDecoration.png'

import './App.css';

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [listTransactions, setListTransactions] = useState([])
  const [filterListTransactions, setFilterListTransactions] = useState([])
  const [filter, setFilter] = useState('')

  function Login() {
    setIsLogin(true)
  }
  function Logout() {
    setIsLogin(false)
  }

  return (
    <div className='container_geral'>
      {
        isLogin ?
          <>
            <HomePage Logout={Logout} listTransactions={listTransactions} setListTransactions={setListTransactions} filterListTransactions={filterListTransactions} setFilterListTransactions={setFilterListTransactions} filter={filter} setFilter={setFilter} />
          </>
        :
        <>
          <div className='container_acesso'>
            <img src={logo} alt="logo" className='logo' />
            <h1>Centralize o controle de suas finanças</h1>
            <span>De forma rápida e segura</span>
            <br />
            <button type='button' onClick={Login} >Entrar</button>
          </div>
          <div className='container_decoracao'>
            <img src={imgDecorativa} alt="imagem decorativa" />
          </div>
        </>
      }
    </div>
  );
}

export default App;
