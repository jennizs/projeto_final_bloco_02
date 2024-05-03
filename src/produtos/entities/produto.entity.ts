import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";



@Entity({name: "tb_produtos"})
export class Produto{


    @PrimaryGeneratedColumn() //Chave Primaria e auto_increment
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @Column()
    foto: String

    @IsNotEmpty() 
    @Column({length: 1000, nullable: false})
    descricao: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    @IsNumber({maxDecimalPlaces:2})
    preco: number;
    

    @ManyToOne(() => Categoria, (categoria) => categoria.Produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria //chave estrangeira



}
     