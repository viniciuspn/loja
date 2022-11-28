import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto/CriaProdutoDTO ";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private readonly produtoRepository: ProdutoRepository) { }

    @Post()
    async cadastarProduto(@Body() dadosProduto: CriaProdutoDTO) {
       const produtoCadastrado = this.produtoRepository.salvarProduto(dadosProduto);
        return produtoCadastrado;
    }

    @Get()
    async listProdutos() {
        const resultado = this.produtoRepository.listarProduto();
        return resultado;
    }
}