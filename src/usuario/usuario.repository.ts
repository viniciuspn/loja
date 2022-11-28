import { Get, Injectable } from "@nestjs/common";

@Injectable()//Provaide sempre tem o decoreiter Injectable
export class UsuarioRepository {
    private usuarios = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }
}