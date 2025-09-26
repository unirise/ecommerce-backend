import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    code: string;

    @Column()
    id_category: string;

    @Column()
    id_partner: string;

    @Column({type: 'int'})
    tax_percentage: number;

}