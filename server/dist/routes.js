"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = exports.Route = void 0;
var controllers_1 = require("./controllers");
var Route = /** @class */ (function () {
    function Route(path, method, action) {
        this.path = path;
        this.method = method;
        this.action = action;
    }
    return Route;
}());
exports.Route = Route;
/**
 * All application routes.
 */
var AppRoutes = [
    {
        path: "/user",
        method: "get",
        action: controllers_1.user.get
    },
    {
        path: "/create",
        method: "post",
        action: controllers_1.quest.create
    },
    {
        path: "/register",
        method: "post",
        action: controllers_1.user.register
    },
    // {
    //     path: "/author/pure",
    //     method: "get",
    //     action: author.getPureSql
    // },
    // {
    //     path: "/author",
    //     method: "post",
    //     action: author.create
    // },
    // {
    //     path: "/ping",
    //     method: "get",
    //     action: system.ping
    // },
    // {
    //     path: "/clear",
    //     method: "get",
    //     action: system.clearDb
    // }
];
function initRoutes(app) {
    AppRoutes.forEach(function (route) {
        app[route.method](route.path, function (request, response, next) {
            route
                .action(request, response)
                .then(function () { return next; })
                .catch(function (err) { return next(err); });
        });
    });
}
exports.initRoutes = initRoutes;
//# sourceMappingURL=routes.js.map