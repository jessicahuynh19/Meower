const express = require('express');
const cors = require('cors'); //middleware

const app = express();

app.use(cors());
app.use(express.json()); //middle ware that parse incoming data

app.get('/', (req, res) => {
    res.json({
        messsage: 'Meower!!!!'
    });
});

function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !=='' && mew.content && mew.content.toString().trim() !=='';
}

app.post('/mews', (req, res) => {
    if (isValidMew(req.body)) {
        //insert into db
        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        };
        console.log(mew);
    } else {
        res.status(422); 
        res.json({
            messsage: 'Hey! Name and Content are required!'
        });

    }
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
}); 