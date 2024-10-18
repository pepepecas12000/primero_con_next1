import '@/app/styles/formss.css'
export default function Crearcuenta(){
    return(
        <div className="login-page">
        <div className="form">
        <form className="form-registro">
          <input type="text" placeholder="Nombre"/>
          <input type="password" placeholder="Contraseña"/>
          <input type="text" placeholder="Email"/>
          <button>Crear</button>
          <p className="message">Ya registrado? <a href="/login">Sign In</a></p>
        </form>
        
        </div></div>
    )
    }