import {FaTrash} from 'react-icons/fa'
import './style.css'

const ListaFinanceira = ({ listTransactions, excluir, filterListTransactions }) => {

    return (
        <>
            {
                listTransactions.length === 0 ?
                    (
                        <>
                            <h3>Você ainda não possui nenhum lançamento</h3>
                        </>
                    )
                :
                    (filterListTransactions.length > 0 ? filterListTransactions : listTransactions).map((elem, index) => (
                        elem.type === 'Entrada' || elem.type === 'entrada' ?
                            <li key={index} className='list-entrada'>
                                <div className='listDescricao' >
                                    <h3>{elem.description}</h3>
                                    <p>R$ {elem.value}</p>
                                    <button type='button' onClick={() => excluir(index)} ><FaTrash /></button>
                                </div>
                                <p className='p-tipo'>{elem.type}</p>
                            </li>
                        :
                            <li key={index}>
                                <div className='listDescricao' >
                                    <h3>{elem.description}</h3>
                                    <p>R$ {elem.value}</p>
                                    <button type='button' ><FaTrash /></button>
                                </div>
                                <p className='p-tipo'>{elem.type}</p>
                            </li>
                    ))
            }
        </>
    )
}

export default ListaFinanceira