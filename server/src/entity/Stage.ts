import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm"
import {Quest} from './Quest';
import {Stage_Action} from './Stage_Action';

export type StageEnum = 'Видео' | 'Текст'| 'Карта' | 'Тест' | 'QR'
export const stageEnumArray = ['Видео', 'Текст', 'Карта', 'Тест', 'QR']
@Entity()
export class Stage {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    number: number

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

    @ManyToOne(() => Quest, (quest) => quest.stages)
    quest: Quest

    @OneToOne(() => Stage_Action, (stageAction) => stageAction.stage)
    stageAction: Stage_Action
}
