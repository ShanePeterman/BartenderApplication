"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const drink_model_1 = require("./models/drink.model");
let app = (0, express_1.default)();
let menu = {
    items: [
        {
            name: 'Cosmo',
            price: 6.99
        },
        {
            name: 'Beer',
            price: 2.99
        },
        {
            name: 'Wine',
            price: 4.99
        },
        {
            name: 'Whiskey',
            price: 5.99
        }
    ]
};
let queue = {
    items: []
};
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/menu', (req, res) => {
    res.send(menu);
});
app.post('/add', (req, res) => {
    queue.items.push(new drink_model_1.Drink(req.body.name, req.body.price));
});
app.get('/queue', (req, res) => {
    res.send(queue);
});
app.listen(3000);
