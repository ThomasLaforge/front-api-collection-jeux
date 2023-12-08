import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const changePasswordConfirmation = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(event.target.value)
    }, [])

    const changePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const changeCurrentPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(event.target.value)
    }, [])

    const handleChangePassword = useCallback(async () => {
        if(password !== passwordConfirmation) {
            setErrorMessage('Les mots de passe ne correspondent pas')
            setPassword('')
            setPasswordConfirmation('')
        }
        else {
            const response = await fetch('http://localhost:1337/api/auth/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    currentPassword,
                    password,
                    passwordConfirmation
                })
            })
    
            if(response.ok) {
                navigate('/?success=change-password')
            }
            else {
                setErrorMessage('Vérifiez les informations saisies')
                setPassword('')
            }
        }
    }, [currentPassword, password, passwordConfirmation])
    return (
        <div>
            <h1>Changer votre mot de passe</h1>
            <div className="form-field">
                <label htmlFor="currentPassword">Entrez votre ancien mot de passe : </label>
                <input type="password" name="currentPassword" value={currentPassword} onChange={changeCurrentPassword} />
            </div>
            <div className="form-field">
                <label htmlFor="password">Entrez votre nouveau mot de passe : </label>
                <input type="password" name="password" value={password} onChange={changePassword} />
            </div>
            <div className="form-field">
                <label htmlFor="passwordConfirmation">Confirmez votre nouveau mot de passe : </label>
                <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={changePasswordConfirmation} />
            </div>
            {errorMessage.length > 0 && <p className="error-message">{errorMessage}</p>}
            <button onClick={handleChangePassword}>Changer votre mot de passe</button>
        </div>
    );
}