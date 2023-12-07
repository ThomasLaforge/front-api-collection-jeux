import { useEffect } from "react";

interface IPageProps {
    protectedPage: boolean;
    Content: React.FC;
}

export default function Page({protectedPage, Content}: IPageProps) {

    useEffect(() => {
        if(protectedPage) {
            // Vérifiez si l'utilisateur est connecté avec la route /api/users/me
            
            // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
        }
    }, [protectedPage]);

    return (
        <div className={"route" + protectedPage ? " protected-route" : ""}>
            <Content />
        </div>
    );
}