"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var url_1 = __importDefault(require("./routes/url"));
var app = (0, express_1.default)();
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var port = process.env.PORT;
var connect_1 = require("./connection/connect");
app.use(express_1.default.json());
(0, connect_1.mongooseConnect)();
app.use('/url', url_1.default);
app.get('/', function (req, res) {
    res.send('Connected Successfully baby!');
});
app.listen(port, function () { return console.log("Server is listening on port ".concat(port)); });
