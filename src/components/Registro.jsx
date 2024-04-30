import Formulario from "./Formulario"
import { useState } from 'react'
import SocialButton from "./SocialButton"
function Registro() {
    const [alert, setAlert] = useState({ mensaje: "", color: "" })
    return (
        <>
            
            
            <h4>O usa tu email para regitrarte</h4>
            <Formulario setAlert={setAlert} />
            {alert.mensaje && <h3 style={{ color: alert.color }}>{alert.mensaje}</h3>}

        </>
    )
}
export default Registro