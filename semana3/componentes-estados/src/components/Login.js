import React from "react";
import Boton from "./Boton";

function Login() {
    
    const click = (x) =>{
        console.log(x)
    }

    return(
        <div>
            <h2>Contasenna</h2>
            <input type="text" />
            <h2>Usuario</h2> 
            <div>
                <Boton funcionClick={() =>click("Login")} texto="Login"/>            
            </div>
        
        </div>

            
        
    );
}
export default Login;