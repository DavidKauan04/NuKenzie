import { useState } from 'react'
import './style.css'

const Formulario = ({ listTransactions, setListTransactions }) => {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('entrada')

    

    function addList(event) {
        event.preventDefault()
        const result = {
            description,
            type,
            value
        }
        setListTransactions([...listTransactions, result])
    }

    return (
        <>
            <form onSubmit={addList}>
                <div className='descricao'>
                    <label htmlFor="descrição">Descrição</label>
                    <input 
                        type="text" 
                        placeholder='Digite aqui sua descrição'
                        name='descrição'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <span>Ex: Compra de roupas</span>
                </div>
                <div className='valueAndType'>
                    <div className='valor'>
                        <label htmlFor="valor">Valor</label>
                        <input 
                            type="number" 
                            placeholder='R$'
                            name='valor'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            required
                        />
                    </div>
                    <div className='tipo_de_valor'>
                        <label htmlFor="tipoDeValor">Tipo de valor</label>
                        <select name="tipoDeValor" id="tipoDeValorSelect" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saida</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Inserir valor</button>
            </form>
        </>
    )
}

export default Formulario