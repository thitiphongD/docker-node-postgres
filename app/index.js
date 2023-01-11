const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/users");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Set proper Headers on Backend
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//routes
app.use("/dev", require("./routes/dev"));
app.use("/users", require("./routes/users"));

(async function() {
    try {
        await sequelize.sync({force: false});
        app.listen(process.env.EXTERNAL_PORT)
    } catch (error) {
        console.log(error);
    }
})();