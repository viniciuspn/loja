import { Module } from "@nestjs/common";
import { UsusuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";


@Module({
    controllers : [UsusuarioController],
    providers: [UsuarioRepository]
})
export class UsuarioModule{}