import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IPageProps {
    protectedPage: boolean;
    Content: React.FC;
}

export default function Page({protectedPage, Content}: IPageProps) {
    const navigate = useNavigate();

    useEffect(() => {
        const checkIsConnected = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                navigate('/?error=no-token')
            }
            try {
            const response = await fetch('http://localhost:1337/api/users/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                await response.json()
            }
            catch(error) {
                navigate('/?error=invalid-token')
            }
        }
        if(protectedPage) {
            checkIsConnected()
        }
            
    }, [protectedPage]);

    return (
        <div className={"route" + protectedPage ? " protected-route" : ""}>
            <Content />
        </div>
    );
}