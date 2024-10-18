    import '@/app/styles/formss.css'

export default function Login() {
    return (
        <div className="login-page">
        <div className="form">
        <form className="form-seccion">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className="message">No registrado? <a href="/crearcuenta">Crea una cuenta</a></p>
    </form>
    
        </div></div>  
    );
  }