import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity('category')
export class Category {
    
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category_name: string;
    
    @ManyToOne(() => Category, { nullable: true })
    @JoinColumn({ name: 'parent_category_id' })
    parent_category: Category;
}
