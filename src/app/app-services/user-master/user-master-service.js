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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var index_1 = require("../../app-modules/index");
var baseAddress = new index_1.BaseAddress().baseAddress();
var UserMasterService = /** @class */ (function () {
    function UserMasterService(httpClient) {
        this.httpClient = httpClient;
    }
    UserMasterService.prototype.getAll = function () {
        return this.httpClient.get('/api/users');
    };
    UserMasterService.prototype.getById = function (id) {
        return this
            .httpClient
            .get('/api/users/' + id);
    };
    UserMasterService.prototype.create = function (user) {
        return this
            .httpClient
            .post(baseAddress + 'users/addUser', user);
    };
    UserMasterService.prototype.update = function (user) {
        return this
            .httpClient
            .put('/api/users/' + user.userId, user);
    };
    UserMasterService.prototype.delete = function (id) {
        return this
            .httpClient
            .delete('/api/users/' + id);
    };
    UserMasterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserMasterService);
    return UserMasterService;
}());
exports.UserMasterService = UserMasterService;
//# sourceMappingURL=user-master-service.js.map