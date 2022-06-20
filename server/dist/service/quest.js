"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestService = void 0;
var Quest_1 = require("../entity/Quest");
var User_1 = require("../entity/User");
var error_1 = require("../error");
var utils_1 = require("./utils");
var data_source_1 = require("../data-source");
var Stage_1 = require("../entity/Stage");
var Stage_Test_1 = require("../entity/Stage_Test");
var Question_1 = require("../entity/Question");
var Answer_1 = require("../entity/Answer");
var RightAnswer_1 = require("../entity/RightAnswer");
var Stage_Action_1 = require("../entity/Stage_Action");
var Quest_User_1 = require("../entity/Quest_User");
function saveQuestion(q, stageTest) {
    return __awaiter(this, void 0, void 0, function () {
        var questionRep, answerRep, rightAnswerRep, question, saveQuest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    questionRep = data_source_1.AppDataSource.getRepository(Question_1.Question);
                    answerRep = data_source_1.AppDataSource.getRepository(Answer_1.Answer);
                    rightAnswerRep = data_source_1.AppDataSource.getRepository(RightAnswer_1.RightAnswer);
                    question = new Question_1.Question();
                    question.number = q.number;
                    question.contain = q.contain;
                    question.type = q.type;
                    question.stageTest = stageTest;
                    return [4 /*yield*/, questionRep.save(question)];
                case 1:
                    saveQuest = _a.sent();
                    q.answers.forEach(function (a) {
                        var answer = new Answer_1.Answer();
                        answer.question = question;
                        answer.value = a.value;
                        answerRep.save(answer);
                    });
                    q.rightAnswers.forEach(function (r) {
                        var rightAnswer = new RightAnswer_1.RightAnswer();
                        rightAnswer.question = question;
                        rightAnswer.value = r.value;
                        rightAnswerRep.save(rightAnswer);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
var QuestService = /** @class */ (function () {
    function QuestService() {
    }
    QuestService.add = function (title, description, image, stages, username) {
        return __awaiter(this, void 0, void 0, function () {
            var questRep, stageRep, userRep, stageTestRep, stageActionRep, questionRep, answerRep, rightAnswerRep;
            var _this = this;
            return __generator(this, function (_a) {
                questRep = data_source_1.AppDataSource.getRepository(Quest_1.Quest);
                stageRep = data_source_1.AppDataSource.getRepository(Stage_1.Stage);
                userRep = data_source_1.AppDataSource.getRepository(User_1.User);
                stageTestRep = data_source_1.AppDataSource.getRepository(Stage_Test_1.Stage_Test);
                stageActionRep = data_source_1.AppDataSource.getRepository(Stage_Action_1.Stage_Action);
                questionRep = data_source_1.AppDataSource.getRepository(Question_1.Question);
                answerRep = data_source_1.AppDataSource.getRepository(Answer_1.Answer);
                rightAnswerRep = data_source_1.AppDataSource.getRepository(RightAnswer_1.RightAnswer);
                return [2 /*return*/, (0, utils_1.catchOrmErrors)(function () { return __awaiter(_this, void 0, void 0, function () {
                        var quest, author, resQuestSave;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    quest = new Quest_1.Quest();
                                    quest.title = title;
                                    quest.description = description;
                                    quest.image = image;
                                    return [4 /*yield*/, userRep.findOneBy({ username: username })];
                                case 1:
                                    author = _a.sent();
                                    quest.author = author;
                                    return [4 /*yield*/, questRep.save(quest)];
                                case 2:
                                    resQuestSave = _a.sent();
                                    return [4 /*yield*/, stages.forEach(function (s) {
                                            return __awaiter(this, void 0, void 0, function () {
                                                var stage, stageTest_1, stageAction;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            stage = new Stage_1.Stage();
                                                            stage.name = s.name;
                                                            stage.number = s.number;
                                                            stage.quest = quest;
                                                            stage.type = s.type;
                                                            return [4 /*yield*/, stageRep.save(stage)];
                                                        case 1:
                                                            _a.sent();
                                                            if (!(stage.type === "Тест")) return [3 /*break*/, 4];
                                                            stageTest_1 = new Stage_Test_1.Stage_Test();
                                                            stageTest_1.stage = stage;
                                                            stageTest_1.title = s.test.title;
                                                            return [4 /*yield*/, stageTestRep.save(stageTest_1)];
                                                        case 2:
                                                            _a.sent();
                                                            return [4 /*yield*/, s.test.questions.forEach(function (q) { return saveQuestion(q, stageTest_1); })];
                                                        case 3:
                                                            _a.sent();
                                                            return [3 /*break*/, 6];
                                                        case 4:
                                                            stageAction = new Stage_Action_1.Stage_Action();
                                                            if (stage.type === "QR") {
                                                                stageAction.to = s.to;
                                                            }
                                                            else if (stage.type === "Видео") {
                                                                stageAction.url = s.url;
                                                            }
                                                            else if (stage.type === "Карта") {
                                                                stageAction.lat = s.lat;
                                                                stageAction.long = s.long;
                                                            }
                                                            else {
                                                                stageAction.text = s.text;
                                                            }
                                                            // console.log('stage',stage);
                                                            stageAction.stage = stage;
                                                            return [4 /*yield*/, stageActionRep.save(stageAction)];
                                                        case 5:
                                                            _a.sent();
                                                            _a.label = 6;
                                                        case 6: return [2 /*return*/];
                                                    }
                                                });
                                            });
                                        })
                                        // console.log(stages[2].questions);
                                    ];
                                case 3:
                                    _a.sent();
                                    // console.log(stages[2].questions);
                                    return [2 /*return*/, resQuestSave];
                            }
                        });
                    }); })];
            });
        });
    };
    QuestService.process = function (userId, questId, progress) {
        return __awaiter(this, void 0, void 0, function () {
            var questRep, userRep, questUserRep, user, quest, questUser, newQuestUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        questRep = data_source_1.AppDataSource.getRepository(Quest_1.Quest);
                        userRep = data_source_1.AppDataSource.getRepository(User_1.User);
                        questUserRep = data_source_1.AppDataSource.getRepository(Quest_User_1.Quest_User);
                        return [4 /*yield*/, userRep.findOneBy({ id: userId })];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, questRep.findOneBy({ id: questId })];
                    case 2:
                        quest = _a.sent();
                        if (!user || !quest) {
                            throw new error_1.NotFoundError('Пользователь или квест');
                        }
                        return [4 /*yield*/, questUserRep.findOneBy({ user: user, quest: quest })];
                    case 3:
                        questUser = _a.sent();
                        if (!(!progress && !questUser)) return [3 /*break*/, 5];
                        newQuestUser = new Quest_User_1.Quest_User();
                        newQuestUser.progress = 1;
                        newQuestUser.quest = quest;
                        newQuestUser.user = user;
                        return [4 /*yield*/, questUserRep.save(newQuestUser)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        if (!(progress && !questUser)) return [3 /*break*/, 6];
                        throw new error_1.NotFoundError('Прохождение квеста для пользователя');
                    case 6:
                        if (!(progress && questUser)) return [3 /*break*/, 8];
                        if (progress <= questUser.progress) {
                            throw new error_1.UnexpectedError('Этап квеста меньше или равен текущему');
                        }
                        if (progress - 1 !== questUser.progress) {
                            throw new error_1.UnexpectedError('Новый этап квеста больше чем на 1, чем текущий этап');
                        }
                        questUser.progress = progress;
                        return [4 /*yield*/, questUserRep.save(questUser)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    QuestService.track = function (userId, questId) {
        return __awaiter(this, void 0, void 0, function () {
            var questRep, userRep, questUserRep, author, quest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        questRep = data_source_1.AppDataSource.getRepository(Quest_1.Quest);
                        userRep = data_source_1.AppDataSource.getRepository(User_1.User);
                        questUserRep = data_source_1.AppDataSource.getRepository(Quest_User_1.Quest_User);
                        return [4 /*yield*/, userRep.findOneBy({ id: userId })];
                    case 1:
                        author = _a.sent();
                        return [4 /*yield*/, questRep.findOneBy({ id: questId, author: author })];
                    case 2:
                        quest = _a.sent();
                        if (!author || !quest) {
                            throw new error_1.NotFoundError('Автор или квест автора');
                        }
                        return [4 /*yield*/, questUserRep.findBy({ quest: quest })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestService.updateImagePath = function (id, path) {
        return __awaiter(this, void 0, void 0, function () {
            var questRep, quest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        questRep = data_source_1.AppDataSource.getRepository(Quest_1.Quest);
                        return [4 /*yield*/, questRep.findOneBy({ id: id })];
                    case 1:
                        quest = _a.sent();
                        if (!quest) {
                            throw new error_1.NotFoundError('Квест');
                        }
                        quest.image = path;
                        return [4 /*yield*/, questRep.save(quest)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestService.getQuest = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                data_source_1.AppDataSource.createQueryBuilder;
                return [2 /*return*/, (0, utils_1.catchOrmErrors)(function () { return __awaiter(_this, void 0, void 0, function () {
                        var quest;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Stage_1.Stage).createQueryBuilder('stage')
                                        .leftJoinAndSelect("stage.stageAction", "stage_action")
                                        .where("stage_action.stageId = stage_action.id")
                                        .getMany()];
                                case 1:
                                    quest = _a.sent();
                                    console.log(quest);
                                    // .leftJoinAndSelect(Stage_Action, "stage_action", "stage_action.stageId = stage.id")
                                    // .leftJoinAndSelect(Stage_Test, "stage_test", "stage_test.stageId = stage.id")
                                    return [2 /*return*/, quest];
                            }
                        });
                    }); })];
            });
        });
    };
    return QuestService;
}());
exports.QuestService = QuestService;
//# sourceMappingURL=quest.js.map