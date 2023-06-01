//Renderizando uma lista utilizando os estados e o map como ferramenta de iteração
import { useState } from "react"

const RenderList = () => {

    const [users, setUser] = useState([
        {id:1, name: 'Rubem', age: 35,},
        {id:2, name: 'Simeão', age: 33,},
        {id:3, name: 'Levi', age: 30,},
        {id:4, name: 'Judá', age: 27,},
        {id:5, name: 'Issacar', age: 25,},
        {id:6, name: 'Zebulom', age: 22,},
        {id:7, name: 'Gade', age: 35,},
        {id:8, name: 'Asér', age: 33,},
        {id:9, name: 'Dã', age: 30,},
        {id:10, name: 'Naftali', age: 27,},
        {id:11, name: 'José', age: 25,},
        {id:12, name: 'Benjamin', age: 22,},
    ]) 

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 13)
        console.log(randomNumber)

        setUser((prevUser) => {
            return prevUser.filter((user) => randomNumber !== user.id)
        })
    }

    return(
        <div>
            <h2>Os filhos de Jacó</h2>
            <ol>
                {users.map((user, i) => (
                <li key={i}>{user.name} - {user.age}</li>
                ))}
            </ol>
            <button onClick={deleteRandom} >Delete random user</button>
        </div>
    )   
}
export default RenderList