import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne } from "typeorm"
import { Question } from './Question';

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
        nullable: false
    })
    value: string

    @ManyToOne(() => Question, (question) => question.answer)
    question: Question

}
