"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
class Role extends sequelize_1.Model {
}
class Token extends sequelize_1.Model {
}
User.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.DataTypes.STRING, unique: true },
    password: { type: sequelize_1.DataTypes.STRING }
}, {
    sequelize: db_1.sequelize,
    tableName: 'User'
});
Role.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    value: { type: sequelize_1.DataTypes.STRING }
}, {
    sequelize: db_1.sequelize,
    tableName: 'Role'
});
Token.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    refreshToken: { type: sequelize_1.DataTypes.STRING }
}, {
    sequelize: db_1.sequelize,
    tableName: 'Token'
});
Role.hasMany(User);
User.belongsTo(Role);
User.hasMany(Token);
Token.belongsTo(User);
const model = {
    User,
    Role,
    Token
};
exports.default = model;
