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
exports.create = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var error_1 = require("../error");
var utils_1 = require("./utils");
var QuestDto_1 = require("./dto/QuestDto");
var quest_1 = require("../service/quest");
// export async function get(request: Request, response: Response) {
//     if (!request.query.username) {
//         response.json(error('Введите query параметр username'))
//         return;
//     }
//     const username = request.query.username as string
//     const res = await UserService.get(username)
//     res ? response.json(ok(res)) : response.json(error('Не существует пользователя с данным username'))  
// }
function create(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var quest, errors, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quest = (0, class_transformer_1.plainToClass)(QuestDto_1.QuestDto, request.body);
                    return [4 /*yield*/, (0, class_validator_1.validate)(quest, { skipMissingProperties: true })];
                case 1:
                    errors = _a.sent();
                    if (errors.length) {
                        throw new error_1.ArgumentError();
                    }
                    // console.log(quest);
                    console.log('addd');
                    return [4 /*yield*/, quest_1.QuestService.add(quest.title, quest.description, quest.image, quest.stages, quest.author.username)];
                case 2:
                    res = _a.sent();
                    response.json((0, utils_1.ok)(res));
                    return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
// export async function getPureSql(request: Request, response: Response) {
//     if (!request.query.id) {
//         response.json(ok(await AuthorService.getPureSql()))
//         return;
//     }
//     const id = request.query.id as string
//     response.json(ok(await AuthorService.getPureSql(id)));
// }
//# sourceMappingURL=quest.js.map