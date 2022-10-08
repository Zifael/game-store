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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = require("./db");
const routers_1 = __importDefault(require("./routers"));
const middleware_error_1 = require("./middlewares/middleware-error");
const PORT = process.env.PORT || 7000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/', routers_1.default);
app.use(middleware_error_1.middlewareError);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.sequelize.authenticate();
        yield db_1.sequelize.sync();
        app.listen(PORT, () => console.log(`Server start on port: ${PORT}`));
    }
    catch (error) {
        console.log(`an eror has occurred ${error}`);
    }
});
start();
