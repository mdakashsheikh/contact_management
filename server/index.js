require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserSc = require('./models/TodoSc');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONN)
.then(() => console.log('Database Connected...'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.get('/data', async(req, res) => {
    try {
        console.log('goru')
        const todos = await UserSc.find({}).sort('-date');
        console.log('goru2')
        res.send({todos})
    } catch (err) {
        res.json(err);
    }
})

app.post('/send', async(req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const phone = req.body.phone;

    try {
        const data = await UserSc.create({
            'name': name,
            'phone': phone,
        })
        res.send(req.body);
        const newUser = new UserSc(data);
        newUser.save();

    } catch (err) {
        res.json(err);
    }
})


app.delete('/data/:id',async(req, res) => {
    const id = req.params.id;

    try {
        await UserSc.findByIdAndRemove(id);
        res.send('Successfully Deleted.')
    } catch (err) {
        res.status(404).send(err);
    }
})

app.listen(5000, () => {
    console.log('Listening on port 5000...');
})