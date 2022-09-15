import { sequelize } from '../db'
import { DataTypes, Model } from 'sequelize'

class User extends Model {
    declare id: number
    declare email: string
    declare password: string
    declare RoleId: number | undefined
}

class Role extends Model {
    declare id: number
    declare value: string
}

class Token extends Model {
    declare id: number
    declare refreshToken: string
}

User.init(
    {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},    
    password:{type: DataTypes.STRING}
    },
    {
        sequelize,
        tableName: 'User'
    }
)

Role.init(
    {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING}
    },
    {
        sequelize,
        tableName: 'Role'
    }
)


Token.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        refreshToken: {type: DataTypes.STRING}
    },
    {
        sequelize,
        tableName: 'Token'
    }
)


Role.hasMany(User)
User.belongsTo(Role)

User.hasMany(Token)
Token.belongsTo(User)

const model = {
    User,
    Role,
    Token
}

export default model