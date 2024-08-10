import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const [error, setError] = useState(false)
    const [messaje, setMessaje] = useState("");

    const validateForm = (e) => {
        e.preventDefault()

        if(email.indexOf('@') < 0 || email.indexOf('.') < 0){
            setError(true)
            setMessaje('Email invalido.')
            return
        }else
        if(!email.trim() || !password.trim() || !confirm.trim()) {
            setError(true)
            setMessaje('Campos obligatorios no ingresados.')
            return
        }else 
        if(password.length < 6) {
            setError(true)
            setMessaje('La contraseña debe ser de largo 6 o más.')
            return
        }else 
        if(password != confirm){
            setError(true)
            setMessaje('Las contraseñas deben ser iguales.')
            return
        }
        setError(false)
        setMessaje('')
        setEmail('')
        setPassword('')
        setConfirm('')
    }

    return (
        <div className="form-div">
            <h1>
                Register
            </h1>
            <form onSubmit={validateForm}>
                {error ? <div><p className="error">{messaje}</p></div> : null}
                <div><input type="email" name="" placeholder="E-Mail" id="email" onChange={(e) => setEmail(e.target.value)}/></div>
                <div><input type="password" name="" placeholder="Contraseña" id="password" onChange={(e) => setPassword(e.target.value)}/></div>
                <div><input type="password" name="" placeholder="Confirmar Contraseña" id="confirm" onChange={(e) => setConfirm(e.target.value)}/></div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default Register;