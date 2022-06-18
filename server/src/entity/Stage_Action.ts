import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import {Stage, StageEnum,stageEnumArray} from './Stage';

@Entity()
export class Stage_Action {

    @PrimaryGeneratedColumn()
    id: number


    @Column({
        type: "enum",
        enum: stageEnumArray,
        default: 'Текст',
        nullable: false
    })
    type: StageEnum

    @Column({
        length:50,
        nullable: false
    })
    name: string

    @OneToOne(() => Stage, (stage) => stage.stageAction)
    stage: Stage

}
