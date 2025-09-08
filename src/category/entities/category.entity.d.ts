import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

export declare class Category {
    category_id: number;
    category_name: string;
    parent_category_id: number;
}
