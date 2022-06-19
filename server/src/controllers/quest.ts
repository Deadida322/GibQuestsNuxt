import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { UserDto } from "./dto";
import { ArgumentError, NotFoundError } from "../error";
import { UserService } from "../service/user";
import { ok, error } from "./utils";
import { QuestDto } from './dto/QuestDto';
import { QuestService } from "../service/quest";



// export async function get(request: Request, response: Response) {
//     if (!request.query.username) {
//         response.json(error('Введите query параметр username'))
//         return;
//     }

//     const username = request.query.username as string
//     const res = await UserService.get(username)
    
//     res ? response.json(ok(res)) : response.json(error('Не существует пользователя с данным username'))  
// }

export async function create(request: Request, response: Response) {
    const quest = plainToClass(QuestDto, request.body);
    const errors = await validate(quest, { skipMissingProperties: true });
    if (errors.length) {
        throw new ArgumentError();
    }
    const res = await QuestService.add(quest.title, quest.description, quest.image, quest.stages, quest.author.username)
    response.json(ok(res));
}

// export async function getPureSql(request: Request, response: Response) {
//     if (!request.query.id) {
//         response.json(ok(await AuthorService.getPureSql()))
//         return;
//     }
//     const id = request.query.id as string
//     response.json(ok(await AuthorService.getPureSql(id)));
// }