import { Get, Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()//Provaide sempre tem o decoreiter Injectable
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if (!possivelUsuario) {
            throw new Error('Usuário não exite!')
        }

        //Validar se os campos foram informados
        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === id) {
                return;
            }

            possivelUsuario[chave] = valor;

        });

        return possivelUsuario;
    }
}