import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import {Quest_User} from './Quest_User';
import {Stage} from './Stage';

@Entity()
export class Quest {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:50,
        nullable: false
    })
    title: string

    @Column({
        length:255,
        nullable: false
    })
    description: string

    @Column({
        length:500,
        nullable: false
    })
    image: string

    @OneToMany(() => Quest_User, (quest_User) => quest_User.quest) // note: we will create author property in the Photo class below
    quest_user: Quest_User[]

    @OneToMany(() => Stage, (stage) => stage.quest) // note: we will create author property in the Photo class below
    stages: Stage[]

}
