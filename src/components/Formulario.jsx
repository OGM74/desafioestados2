import{useState} from 'react'
function Formulario({setAlert}){
    const [user, setUser]= useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    function enviarFormulario(e){
        e.preventDefault() 
        if(user === "" || password === "" || confirmPassword === ""){
            setAlert({mensaje:"Debes completar todos los campos", color:"red"})
            setUser("")
            setPassword("")
            setConfirmPassword("")
            return
        }
        if(password!== confirmPassword){
            setAlert({mensaje:"Los password deben coincidir", color: "red"})
            setUser("")
            setPassword("")
            setConfirmPassword("")
            return
        }else{
            setAlert({mensaje:"Bienvenido a Banco OGMundo", color: "green"})
            setUser("")
            setPassword("")
            setConfirmPassword("")
        }
    }
    return(
    <>
    <form onSubmit={enviarFormulario}>
       <div className='inputs'>
        <input placeholder= "nombre de usuario" type="text"  value={user} 
        onChange={ (e)=> setUser (e.target.value)}  />
        <input placeholder="password" type="password" value={password} 
        onChange={(e)=> setPassword(e.target.value)}/>
        <input placeholder="confirme su password" type="password" value={confirmPassword}
        onChange={(e)=> setConfirmPassword(e.target.value)}/>
        <button type="submit">Iniciar sesión</button>
       </div>
    </form>
    </>
    )
}
export default Formulario