"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserMaster = /** @class */ (function () {
    function UserMaster() {
        this.email = 'sonawaneyogeshb@gmail.com';
    }
    Object.defineProperty(UserMaster.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            var fullName = value.trim();
            this.fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    return UserMaster;
}());
exports.UserMaster = UserMaster;
//# sourceMappingURL=user-master.js.map