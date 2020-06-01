const express = require('express')
const app = express()
const port =  process.env.PORT || 4000
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

// var corsOptions = {
//     origin: 'https://sfos-backend.herokuapp.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());
app.use(cors())

app.use('/files', express.static(path.join(__dirname, 'photos')))

require('./setup/mongo');

const order = require('./routes/user_routes');
const admin = require('./routes/admin_routes');

app.use('/order', order);
app.use('/admin', admin);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

