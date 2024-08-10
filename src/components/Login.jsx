import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState(false)
    const [messaje, setMessaje] = useState("");

    const validateForm = (e) => {
        e.preventDefault()

        if(!email.trim() || !password.trim()) {
            setError(true)
            setMessaje('Campos obligatorios no ingresados.')
            return
        }else 
        if(password.length < 6) {
            setError(true)
            setMessaje('Contraseña incorrecta.')
            return
        }

        setError(false)
        setMessaje('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="form-div">
            <h1>
                Login
            </h1>
            <form onSubmit={validateForm}>
                {error ? <div><p className="error">{messaje}</p></div> : null}
                <div><input type="email" name="" placeholder="E-Mail" id="email" onChange={(e) => setEmail(e.target.value)}/></div>
                <div><input type="password" name="" placeholder="Contraseña" id="password" onChange={(e) => setPassword(e.target.value)}/></div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;