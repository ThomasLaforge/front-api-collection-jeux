import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [login, setLogin] = useState('thomas.lala@gmail.com')
    const [username, setUsername] = useState('Toto')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const changeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }, [])

    const changePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const changeUsername = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }, [])

    const handleRegister = useCallback(async () => {
        const response = await fetch('http://localhost:1337/api/auth/local/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: login,
                username,
                password
            })
        })

        if(response.ok) {
            navigate('/?success=register')
        }
        else {
            setErrorMessage('Vérifiez les informations saisies')
            setPassword('')
        }
    }, [login, password])
    return (
        <div>
            <h1>Créer votre compte</h1>
            <div className="form-field">
                <label htmlFor="login">Entrez votre email :</label>
                <input type="text" name="login" value={login} onChange={changeLogin} />
            </div>
            <div className="form-field">
                <label htmlFor="username">Entrez votre nom d'utilisateur :</label>
                <input type="text" name="username" value={username} onChange={changeUsername} />
            </div>
            <div className="form-field">
                <label htmlFor="password">Entrez votre mot de passe : </label>
                <input type="password" name="password" value={password} onChange={changePassword} />
            </div>
            {errorMessage.length > 0 && <p className="error-message">{errorMessage}</p>}
            <button onClick={handleRegister}>Connexion</button>
        </div>
    );
}