var mongoose = require('mongoose')
const _CONFIG = require("../config/keys")  
console.log("connecting");
mongoose.Promise = global.Promise;

mongoose.connect(_CONFIG.atlasURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("database is Connected!");
    }
});