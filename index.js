const mySQL = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const apiRoot = 'api';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable('x-powered-by')

app.use(express.json());
app.use(cors({
    origin: '*',
}));
app.options('*', cors());

const connection = mySQL.createConnection({
    host: '109.234.165.89',
    port: '3306',
    user: 'recz5663_test',
    password: 'Yug599N40?O1',
    database: 'recz5663_nicolas'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get(`/${apiRoot}/user`, (req, res) => {
    try {
        connection.query('SELECT * FROM user', (err, rows) => {
            if (err) throw err;
            res.json(rows);
        });
    } catch (error) {

    }
});


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});