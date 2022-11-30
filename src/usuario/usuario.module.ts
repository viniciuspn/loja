import { Module } from "@nestjs/common";
import { UsusuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidator } from "./validacao/email-eh-unico.validator";


@Module({
    controllers : [UsusuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator]
})
export class UsuarioModule{}