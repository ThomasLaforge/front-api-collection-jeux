import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const changeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }, [])

    const changePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const handleConnexion = useCallback(async () => {
        const response = await fetch('http://localhost:1337/api/auth/local', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier: login,
                password
            })
        })

        try {
            const data = await response.json()
            if(data.token){
                localStorage.setItem('token', data.token)
                navigate('/home')
            }
            else {
                setErrorMessage('Identifiants incorrects')
                setLogin('')
                setPassword('')
            }
        }
        catch(error) {
            setErrorMessage('Identifiants incorrects')
            setLogin('')
            setPassword('')
        }

    }, [login, password])
    return (
        <div>
            <h1>Connexion</h1>
            <div className="form-field">
                <label htmlFor="login">Entrez votre identifiant :</label>
                <input type="text" name="login" value={login} onChange={changeLogin} />
            </div>
            <div className="form-field">
                <label htmlFor="password">Entrez votre mot de passe : </label>
                <input type="password" name="password" value={password} onChange={changePassword} />
            </div>
            {errorMessage.length > 0 && <p className="error-message">{errorMessage}</p>}
            <button onClick={handleConnexion}>Connexion</button>
        </div>
    );
}