import './style.css'

const Price = ({ listTransactions }) => {

    const saldo = listTransactions.reduce((acc, valorAtual) => {
        if (valorAtual.type !== "entrada") {
            return acc - valorAtual.value
        } 
        return acc + parseInt(valorAtual.value)
    }, 0)

    return (
        <>
            <div className='container_saldo'>
                <div className='estilizacao_valor_saldo'>
                    <p>Valor Total:</p>
                    <span>$ {saldo}</span>
                </div>
                <p>O valor se refere ao saldo</p>
                {
                    saldo < 0 ?
                    <>
                        <span className='dividas'>Voce está devendo!!!</span>
                    </>
                    :
                    <>
                    </>
                }
            </div>
        </>
    )
}

export default Price