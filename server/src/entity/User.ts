import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import {Quest_User} from './Quest_User';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:50,
        nullable: false
    })
    name: string

    @Column({
        length:50,
        nullable: false
    })
    surname: string

    @Column({
        length:50,
        nullable: false
    })
    username: string

    @Column({
        length:50,
        nullable: false
    })
    password: string

    @OneToMany(() => Quest_User, (quest_User) => quest_User.user) 
    quest_user: Quest_User[]

}
