const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRouter = require('./config/routes');
const cors = require('cors');
const app = express();
const config = require('./config/environment');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.use('/api', apiRouter);





app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`)
    require('./db')
});

module.exports = app;