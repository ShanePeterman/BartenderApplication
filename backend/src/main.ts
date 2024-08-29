import express from 'express';
import { Menu } from './models/menu.model';
import { Queue } from './models/queue.model';
import { Drink } from './models/drink.model';
let app = express();

let menu:Menu = {
    items:[
        {
            name:'Cosmo',
            price:6.99
        },
        {
            name:'Beer',
            price:2.99
        },
        {
            name:'Wine',
            price:4.99
        },
        {
            name:'Whiskey',
            price:5.99
        }
    ]
}

let queue:Queue = {
    items:[]
};

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/menu', (req, res)=>{
    res.send(menu);
});

app.post('/add', (req, res)=>{
    queue.items.push(new Drink(req.body.name, req.body.price))
});

app.get('/queue', (req,res)=>{
    res.send(queue);
})

app.listen(3000);
