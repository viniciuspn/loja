import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO{
    
    @IsNotEmpty({ message: 'O nome não pode ser vazio!'})
    nome: string;

    @IsEmail(undefined, {message: 'O e-mail informado é invalido!'} )
    @EmailEhUnico({message: 'já existe um usuário com este e-mail'})
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo manos 6 caracteres!'})
    senha: string;
}