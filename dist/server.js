"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const server = (0, express_1.default)();
//Configurando template engine
server.set("view engine", "mustache");
server.set("views", path_1.default.join(__dirname, "views"));
server.engine("mustache", (0, mustache_express_1.default)());
//Configurando páginas estáticas (public)
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
//Rotas
server.listen(process.env.PORT);
server.use(index_1.default);
//Rota erro 404
server.use((req, res) => {
    res.render("pages/404");
});
