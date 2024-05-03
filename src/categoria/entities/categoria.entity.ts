

import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produtos/entities/produto.entity";


@Entity({name: "tb_categoria"})
export class Categoria{


    @PrimaryGeneratedColumn() 
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    tipo: string;


    @OneToMany(() => Produto, (Produto) => Produto.categoria)
    Produto: Produto[] 
     
    produto: Produto 


}