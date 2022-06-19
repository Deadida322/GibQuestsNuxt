import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm"
import {Quest_User} from './Quest_User';
import {Stage} from './Stage';
import {User} from './User';

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
        type: "text",
        nullable: false
    })
    description: string

    @Column({
        type: "text",
        nullable: false
    })
    image: string

    @OneToMany(() => Quest_User, (quest_User) => quest_User.quest, {cascade: ["update", "remove"]})
    quest_user: Quest_User[]

    @OneToMany(() => Stage, (stage) => stage.quest, {cascade: ["update", "remove"]}) 
    stages: Stage[]

    @ManyToOne(() => User, (user) => user.quests)
    author: User

}
