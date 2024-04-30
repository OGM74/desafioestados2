import Registro from "./components/Registro"
import Formulario from "./components/Formulario"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import SocialButton from "./components/SocialButton"
import'./App.css'


function App() {

  return (
    
    <div className="header">
      <h3>CREA UNA CUENTA</h3>
      
      <div className="fotos">
      <SocialButton url={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} />
    
      
      <SocialButton url={'https://img.freepik.com/vector-premium/logotipo-redes-sociales-contorno-negro_197792-2416.jpg'} />
      
      
      <SocialButton url={'https://cdn-icons-png.flaticon.com/256/20/20673.png'} />
    </div>
      
      <div className="section">
      <Registro />
      </div>
    </div>

  
  )
}

export default App
