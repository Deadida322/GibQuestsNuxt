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
exports.QuestionDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var RightAnswerDto_1 = require("./RightAnswerDto");
var AnswerDto_1 = require("./AnswerDto");
var QuestionDto = /** @class */ (function () {
    function QuestionDto() {
    }
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], QuestionDto.prototype, "number", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], QuestionDto.prototype, "contain", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], QuestionDto.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return AnswerDto_1.AnswerDto; }),
        __metadata("design:type", Array)
    ], QuestionDto.prototype, "answers", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return RightAnswerDto_1.RightAnswerDto; }),
        __metadata("design:type", Array)
    ], QuestionDto.prototype, "rightAnswers", void 0);
    return QuestionDto;
}());
exports.QuestionDto = QuestionDto;
//# sourceMappingURL=QuestionDto.js.map