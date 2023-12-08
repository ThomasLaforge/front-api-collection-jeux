import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Home() {
    const [freeGames, setFreeGames] = useState([])
    const [officialGames, setOfficialGames] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getAllGames = async () => {
            const responses = await Promise.all([
                fetch('http://localhost:1337/api/free-games'),
                fetch('http://localhost:1337/api/official-games', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
            ])
            const [freeGamesData, officialGamesData] = await Promise.all(responses.map(res => res.json()))
            setFreeGames(freeGamesData)
            setOfficialGames(officialGamesData)
        }
        getAllGames()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>
            <Link to="/change-password">Changer votre mot de passe</Link>
            <h1>Bienvenue dans votre collection de jeux</h1>
            <a onClick={handleLogout}>Déconnexion</a>

            <div className="free-games">
                <h2>Jeux gratuits</h2>
                <div className="free-games-list-content">
                    {freeGames.map((game: any) => (
                        <div className="game-card" key={game.id}>
                            <img src={game.image} alt={game.name} />
                            <p>{game.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="official-games">
                <h2>Jeux officiels</h2>
                <div className="official-games-list-content">
                    {officialGames.map((game: any) => (
                        <div className="game-card" key={game.id}>
                            <img src={game.image} alt={game.name} />
                            <p>{game.name}</p>
                            <p>{game.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}