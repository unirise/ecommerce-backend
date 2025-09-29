import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('partner')
export class Partner {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    name: string;

    @Column({type: "varchar"})
    logo_link: string;

    @Column()
    address: string;

    @Column({unique: true})
    email: string;

    @Column({ nullable: true })
    phone: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
