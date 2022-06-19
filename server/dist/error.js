"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedDBError = exports.NotFoundError = exports.AlreadyExistsError = exports.ArgumentError = exports.ProtocolError = void 0;
var ProtocolError = /** @class */ (function (_super) {
    __extends(ProtocolError, _super);
    function ProtocolError(message, innerError) {
        var _this = _super.call(this, message) || this;
        _this.innerError = innerError;
        return _this;
    }
    return ProtocolError;
}(Error));
exports.ProtocolError = ProtocolError;
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(argumentName, reason) {
        if (argumentName === void 0) { argumentName = ''; }
        if (reason === void 0) { reason = 'is incorrect'; }
        return _super.call(this, argumentName ? "argument ".concat(argumentName, " ").concat(reason) : 'one of arguments is incorrect') || this;
    }
    return ArgumentError;
}(ProtocolError));
exports.ArgumentError = ArgumentError;
var AlreadyExistsError = /** @class */ (function (_super) {
    __extends(AlreadyExistsError, _super);
    function AlreadyExistsError() {
        return _super.call(this, 'already exists') || this;
    }
    return AlreadyExistsError;
}(ProtocolError));
exports.AlreadyExistsError = AlreadyExistsError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(entity) {
        if (entity === void 0) { entity = ''; }
        return _super.call(this, entity ? "".concat(entity, " is not found") : 'not found') || this;
    }
    return NotFoundError;
}(ProtocolError));
exports.NotFoundError = NotFoundError;
var UnexpectedDBError = /** @class */ (function (_super) {
    __extends(UnexpectedDBError, _super);
    function UnexpectedDBError() {
        return _super.call(this, 'fatal database operation error') || this;
    }
    return UnexpectedDBError;
}(ProtocolError));
exports.UnexpectedDBError = UnexpectedDBError;
//# sourceMappingURL=error.js.map