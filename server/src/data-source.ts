import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Quest} from './entity/Quest';
import { Stage_Action } from './entity/Stage_Action';
import { Stage } from './entity/Stage';
import { Quest_User } from './entity/Quest_User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "davidavi",
    database: "quests",
    synchronize: true,
    logging: false,
    entities: [User,Quest, Stage_Action, Stage, Quest_User],
    migrations: [],
    subscribers: [],
})
