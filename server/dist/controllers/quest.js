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
exports.createQrTest = exports.getImage = exports.updateImage = exports.trackQuest = exports.processQuest = exports.create = exports.getQuest = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var error_1 = require("../error");
var utils_1 = require("./utils");
var dto_1 = require("./dto");
var quest_1 = require("../service/quest");
var fs = require("fs");
var path = require("path");
var QRCode = require("qrcode");
function getQuest(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!request.query.id) {
                        response.json((0, utils_1.error)('Введите query параметр id'));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, quest_1.QuestService.getQuest(+request.query.id)];
                case 1:
                    res = _a.sent();
                    res ? response.json((0, utils_1.ok)(res)) : response.json((0, utils_1.error)('Не существует квеста с данным id'));
                    return [2 /*return*/];
            }
        });
    });
}
exports.getQuest = getQuest;
function create(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var quest, errors, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quest = (0, class_transformer_1.plainToClass)(dto_1.QuestDto, request.body);
                    return [4 /*yield*/, (0, class_validator_1.validate)(quest, { skipMissingProperties: true })];
                case 1:
                    errors = _a.sent();
                    if (errors.length) {
                        throw new error_1.ArgumentError();
                    }
                    return [4 /*yield*/, quest_1.QuestService.add(quest.title, quest.description, quest.stages, quest.author.username)];
                case 2:
                    res = _a.sent();
                    response.json((0, utils_1.ok)(res));
                    return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
function processQuest(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var processQuestDto, errors, res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    processQuestDto = (0, class_transformer_1.plainToClass)(dto_1.ProcessQustDto, request.body);
                    return [4 /*yield*/, (0, class_validator_1.validate)(processQuestDto, { skipMissingProperties: true })];
                case 1:
                    errors = _a.sent();
                    if (errors.length) {
                        throw new error_1.ArgumentError();
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, quest_1.QuestService.process(processQuestDto.userId, processQuestDto.questId, processQuestDto.progress ? processQuestDto.progress : null)];
                case 3:
                    res = _a.sent();
                    response.json((0, utils_1.ok)(res));
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    response.json((0, utils_1.error)(e_1.message));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.processQuest = processQuest;
function trackQuest(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var res, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!request.query.userId || !request.query.questId) {
                        response.json((0, utils_1.error)('Введите query параметр userId и questId'));
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, quest_1.QuestService.track(+request.query.userId, +request.query.questId)];
                case 2:
                    res = _a.sent();
                    response.json((0, utils_1.ok)(res));
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    response.json((0, utils_1.error)(e_2.message));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.trackQuest = trackQuest;
function updateImage(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var documentFile, pathImage, res, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!request.query.id) {
                        response.json((0, utils_1.error)('Введите query параметр id квеста'));
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    documentFile = request.files;
                    pathImage = path.join(__dirname, '../images', documentFile.image.name);
                    fs.writeFileSync(pathImage, documentFile.image.data);
                    if (!fs.existsSync(pathImage)) {
                        response.json((0, utils_1.error)('Ошибка при сохранении изображения'));
                    }
                    return [4 /*yield*/, quest_1.QuestService.updateImagePath(+request.query.id, pathImage)];
                case 2:
                    res = _a.sent();
                    response.json((0, utils_1.ok)(res));
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    response.json((0, utils_1.error)(e_3.message));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateImage = updateImage;
function getImage(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!request.query.image) {
                response.json((0, utils_1.error)('Введите query параметр image квеста'));
            }
            try {
                fs.createReadStream(request.query.image).pipe(response);
            }
            catch (e) {
                response.json((0, utils_1.error)(e.message));
            }
            return [2 /*return*/];
        });
    });
}
exports.getImage = getImage;
function createQrTest(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var word, pathQr_1, base64Image_1, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    word = request.query.word;
                    if (!request.query.word) {
                        response.json((0, utils_1.error)('Введите query параметр word'));
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    pathQr_1 = path.join(__dirname, '../qr', "1.png");
                    return [4 /*yield*/, QRCode.toDataURL(word, function (err, src) {
                            if (err)
                                response.send("Error occured");
                            base64Image_1 = src.split(';base64,').pop();
                            fs.writeFileSync(pathQr_1, base64Image_1, { encoding: 'base64' });
                        })];
                case 2:
                    _a.sent();
                    fs.createReadStream(pathQr_1).pipe(response);
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    response.json((0, utils_1.error)(e_4.message));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createQrTest = createQrTest;
//# sourceMappingURL=quest.js.map