import { Expose, Type } from "class-transformer";
import { IsDefined, Matches, IsOptional } from "class-validator";
import {RightAnswerDto} from './RightAnswerDto';
import {AnswerDto} from './AnswerDto';


export abstract class QuestionDto {
    id: number

    @IsDefined()
    @Expose()
    number: number;

    @IsDefined()
    @Expose()
    contain: string;

    @IsDefined()
    @Expose()
    type: string;

    // type: type
    @IsDefined()
    @Type(() => AnswerDto)
    answers: AnswerDto[];

    @IsDefined()
    @Type(() => RightAnswerDto)
    rightAnswers: RightAnswerDto[];
}
 