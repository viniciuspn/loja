import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioRepository } from "./usuario.repository";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";

@Controller('/usuarios')
export class UsusuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            mensagem: 'Usuário Criado com sucesso!'
        };
    }

    @Get()
    async listUsuarios() {
        const usuarioSalvos = await this.usuarioRepository.listar();
        const usuarioLista = usuarioSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        )
        return usuarioLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() dadosParaAtulizar: AtualizaUsuarioDTO){
        const usuarioAtulizado = await this.usuarioRepository.atualiza(id, dadosParaAtulizar);

        return {
            usuario: usuarioAtulizado,
            mensagem: 'Usuário atualizado com sucesso!'

        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuarioRepository.remove(id);
        return {
            usuario: usuarioRemovido,
            mensagem: 'Usuário removido com sucesso!'

        }

    }
}