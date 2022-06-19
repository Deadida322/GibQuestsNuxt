import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Answer } from "./Answer";
import {Stage_Test} from './Stage_Test';
import { RightAnswer } from './RightAnswer';

export type QuestionEnum = 'Множественный выбор'| 'Выбор'| 'Вписать ответ'| 'Расположить по порядку'
export const QuestionEnumArray = ['Множественный выбор', 'Выбор', 'Вписать ответ', 'Расположить по порядку']

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    number: number

    @Column({
        length:50,
        nullable: false
    })
    contain: string

    @Column({
        type: "enum",
        enum: QuestionEnumArray,
        default: 'Выбор',
        nullable: false
    })
    type: QuestionEnum
    

    @ManyToOne(() => Stage_Test, (stageTest) => stageTest.question)
    stageTest: Stage_Test

    @OneToMany(() => Answer, (answer) => answer.question, {cascade: ["remove", "update"]})
    answer: Answer

    @OneToMany(() => RightAnswer, (rightAnswer) => rightAnswer.question, {cascade: ["remove", "update"]})
    rightAnswer: RightAnswer
}
