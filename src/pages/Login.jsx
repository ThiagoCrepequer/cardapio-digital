import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const resposta = await axios.post(import.meta.env.VITE_API_URL + "/auth/login", {
            email: e.target[0].value,
            password: e.target[1].value,
        });

        if(resposta.status !== 200) {
            alert("Erro ao fazer login");
            return;
        }

        const responseToken = resposta.headers.authorization;
        const token = responseToken.replace("Bearer ", "");
        Cookies.set("token", token);
    
        return navigate("/admin");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )
}