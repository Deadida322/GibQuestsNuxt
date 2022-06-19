"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var Quest_1 = require("./entity/Quest");
var Stage_Action_1 = require("./entity/Stage_Action");
var Stage_1 = require("./entity/Stage");
var Quest_User_1 = require("./entity/Quest_User");
var Stage_Test_1 = require("./entity/Stage_Test");
var RightAnswer_1 = require("./entity/RightAnswer");
var Answer_1 = require("./entity/Answer");
var Question_1 = require("./entity/Question");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "quests",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Quest_1.Quest, Stage_Action_1.Stage_Action, Stage_1.Stage, Quest_User_1.Quest_User, Stage_Test_1.Stage_Test, RightAnswer_1.RightAnswer, Answer_1.Answer, Question_1.Question],
    migrations: [],
    subscribers: [],
});
exports.AppDataSource.initialize().then(function () { }).catch(function (e) { return console.log(e); });
//# sourceMappingURL=data-source.js.map