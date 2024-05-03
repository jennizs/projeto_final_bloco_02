

import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_categoria"})
export class Categoria{


    @PrimaryGeneratedColumn() //Chave Primaria e auto_increment
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    tipo: string;

    


}