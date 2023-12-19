import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FormAuth } from "../components/FormAuth";

export function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resposta = await axios.post(import.meta.env.VITE_API_URL + "/auth/login", {
            email: e.target[0].value,
            password: e.target[1].value,
        });

        if (resposta.status !== 200) {
            alert("Erro ao fazer login");
            return;
        }

        const responseToken = resposta.headers.authorization;
        const token = responseToken.replace("Bearer ", "");
        Cookies.set("token", token);

        return navigate("/admin");
    }

    return (
        <FormAuth
            handleSubmit={handleSubmit}
            title="Login"
        >
            <Input
                type="email"
                placeholder="Email"
            />
            <Input
                type="password"
                placeholder="Password"
            />
            <Button type="submit">Login</Button>
        </FormAuth>
    )
}