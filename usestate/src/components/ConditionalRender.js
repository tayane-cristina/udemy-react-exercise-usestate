import { useState } from 'react';

const ConditionalRender = () => {

 const [x] = useState(true);
 const [name, setName] = useState("Gisele")

 return(
    <div>
        <h1>Condicional simples</h1>
        {x && <p>Se x for true, este bloco será exibido</p>}

        <h1>If ternário</h1>
        {name === "Tayane" ? (
            <p>O nome é Tayane</p>
        ) : (
            <p>Nome não encontrado!</p>
        )}
        <button onClick={() => setName("Tayane")}>Clique aqui</button>
    </div>
 )

    

}
export default ConditionalRender;