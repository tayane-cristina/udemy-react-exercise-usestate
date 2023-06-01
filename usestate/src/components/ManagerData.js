//Definindo e alterando os valores de um estado
import { useState } from 'react'

const ManagerData = () => {

    const [number, setNumber] = useState(10)
    return (
        <div>
            <h3>O valor inicial do numero é dez, quando eu clico no botão o estado é alterando
                e o valor passa a ser vinte e cinco: {number}
            </h3>
            <button onClick={() => (setNumber(25))} >Alterar variável</button>
        </div>
    )
}
export default ManagerData;