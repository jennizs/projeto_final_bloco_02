import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../services/produto.services";
import { Produto } from "../entities/produto.entity";




@Controller("/produtos")
export class ProdutoController{

    constructor(private readonly ProdutoService: ProdutoService) { }

    @Get()
    @HttpCode(HttpStatus.OK) // 200
    findAll(): Promise<Produto[]>{
        return this.ProdutoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK) // 200
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.ProdutoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK) // 200
    findByNome(@Param('nome') nome: string): Promise<Produto[]>{
        return this.ProdutoService.findByNome(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Produto: Produto): Promise<Produto> {
        return this.ProdutoService.create(Produto);
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Produto: Produto): Promise<Produto> {
        return this.ProdutoService.update(Produto);
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) // 204
    delete(@Param('id', ParseIntPipe) id: number){
        return this.ProdutoService.delete(id);
    }
}