import { useEffect, useState } from "react"

export default function Home() {
    const [freeGames, setFreeGames] = useState([])
    const [officialGames, setOfficialGames] = useState([])

    useEffect(() => {
        const getAllGames = async () => {
            // Récupérez les jeux gratuits avec la route GET /api/free-games
            // Récupérez les jeux officiels avec la route /api/games/official
            
            // stockez-les dans le state freeGames
            // stockez-les dans le state officialGames
        }
        getAllGames()
    }, [])

    return (
        <div>
            <h1>Bienvenue dans votre collection de jeux</h1>

            <div className="free-games">
                <h2>Jeux gratuits</h2>
                <div className="free-games-list-content">
                    {/* Affichez les jeux gratuits ici */}
                </div>
            </div>

            <div className="official-games">
                <h2>Jeux officiels</h2>
                <div className="official-games-list-content">
                    {/* Affichez les jeux officiels ici */}
                </div>
            </div>
        </div>
    )
}