const express = require('express');
const cors = require('cors'); //middleware

const app = express();

app.use(cors());
app.use(express.json()); //midde ware that parse incoming data

app.get('/', (req, res) => {
    res.json({
        messsage: 'Meower!!!!'
    });
});

app.post('/mews', (req, res) => {
    if(isValidMew(req.body)) {
        //insert into db
    }
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
}); 