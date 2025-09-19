import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity('category')
export class Category {
    
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category_name: string;
    
    @ManyToOne(() => Category, (category) => category.children, { nullable: true })
    @JoinColumn({ name: 'parent_category_id' })
    parent_category: Category;

    @OneToMany(() => Category, (category) => category.parent_category)
    children: Category[];
}
