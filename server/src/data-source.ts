import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Quest} from './entity/Quest';
import { Stage_Action } from './entity/Stage_Action';
import { Stage } from './entity/Stage';
import { Quest_User } from './entity/Quest_User';
import { Stage_Test } from './entity/Stage_Test';
import { RightAnswer } from './entity/RightAnswer';
import { Answer } from "./entity/Answer";
import { Question } from './entity/Question';

export const Entities = [User,Quest, Stage_Action, Stage, Quest_User, Stage_Test, RightAnswer, Answer, Question] 

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "davidavi",
    database: "quests",
    synchronize: true,
    logging: false,
    entities: Entities,
    migrations: [],
    subscribers: [],
})
