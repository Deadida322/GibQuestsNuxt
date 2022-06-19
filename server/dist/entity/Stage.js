"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = exports.stageEnumArray = void 0;
var typeorm_1 = require("typeorm");
var Quest_1 = require("./Quest");
exports.stageEnumArray = ['Видео', 'Текст', 'Карта', 'Тест', 'QR'];
var Stage = /** @class */ (function () {
    function Stage() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Stage.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false
        }),
        __metadata("design:type", Number)
    ], Stage.prototype, "number", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: exports.stageEnumArray,
            default: 'Текст',
            nullable: false
        }),
        __metadata("design:type", String)
    ], Stage.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            length: 50,
            nullable: false
        }),
        __metadata("design:type", String)
    ], Stage.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Quest_1.Quest; }, function (quest) { return quest.stages; }),
        __metadata("design:type", Quest_1.Quest
        // @OneToOne(() => Stage_Action, (stageAction) => stageAction.stage)
        // stageAction: Stage_Action
        // @OneToOne(() => Stage_Test, (stageTest) => stageTest.stage)
        // stageTest: Stage_Test
        )
    ], Stage.prototype, "quest", void 0);
    Stage = __decorate([
        (0, typeorm_1.Entity)()
    ], Stage);
    return Stage;
}());
exports.Stage = Stage;
//# sourceMappingURL=Stage.js.map