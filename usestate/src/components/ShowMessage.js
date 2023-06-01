import React from "react";

const ShowMessage = ({myFunction}) => {
    return(
        <> 
            <button onClick={myFunction}>Clique aqui para renderizar a menssagem</button>
        </>
    )
}
export default ShowMessage;