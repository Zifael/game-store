"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(model) {
        this.email = model.email;
        this.RoleId = model.RoleId;
    }
}
exports.UserDto = UserDto;
