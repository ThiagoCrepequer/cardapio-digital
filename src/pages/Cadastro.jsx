import axios from "axios";
import { FormAuth } from "../components/FormAuth";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Cadastro() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const resposta = await axios.post(import.meta.env.VITE_API_URL + "/auth/register", {
            email: e.target[0].value,
            password: e.target[1].value,
        });

        if(resposta.status !== 200) {
            alert("Erro ao fazer login");
            return;
        }
    }
    
    return (
        <FormAuth
            title="Cadastro"
            onSubmit={handleSubmit}
        >
            <Input type="email" placeholder="Email" />
            <div className="flex gap-2">
                <Input type="password" placeholder="Senha"/>
                <Input type="password" placeholder="Repita a senha"/>
            </div>
            <Button type="submit">Cadastrar</Button>
        </FormAuth>
    )
}