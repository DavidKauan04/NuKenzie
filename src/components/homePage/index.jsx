import { useEffect } from 'react'
import Formulario from '../form'
import ListaFinanceira from '../listaFinanceira'
import Price from '../valorTotal'
import './style.css'

const HomePage = ({ Logout, listTransactions, setListTransactions, filterListTransactions , setFilterListTransactions, filter, setFilter}) => {

    useEffect(() => {
        const newFilter = listTransactions.filter((list) => list.type === filter)
        setFilterListTransactions(newFilter)
    }, [filter])

    function excluir(lixo) {
        setListTransactions(listTransactions.filter((elem, index) => index !== lixo))
    }
    
    return (
        <div className='home'>
            <header className='cabecalho'>
                <h1 className='logoHome'>Nu <span>Kenzie</span></h1>
                <div>
                    <button type='button' onClick={Logout} className='logout' >Sair</button>
                </div>
            </header>

            <div className='container__home_conteudo'>
                <div className='form_And_Price'>
                    <Formulario setListTransactions={setListTransactions} listTransactions={listTransactions} />
                    <Price listTransactions={listTransactions} />
                </div>
                <div className='cards'>
                    <div className='filtros'>
                        <h4>Resumo financeiro</h4>
                        <div className='buttons_Filtros'>
                            <button type='button' onClick={() => setFilter('')} >Todos</button>
                            <button type='button' onClick={() => setFilter('entrada')} >Entradas</button>
                            <button type='button' onClick={() => setFilter('saida')} >Despesas</button>
                        </div>
                    </div>
                    <ul className='list'>
                        <ListaFinanceira listTransactions={listTransactions} excluir={excluir} filterListTransactions={filterListTransactions} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage