import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    city: string

    @Column()
    country: string

}
