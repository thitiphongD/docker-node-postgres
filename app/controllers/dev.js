const packageJson = require("../../package.json");
const sequelize = require("../util/database");

exports.getConfig = function(req, res, next) {
    return res.status(200).json({packageJson});
};

exports.getVersion = function(req, res, next) {
    return res.status(200).json({'nps Backend': packJson.version})
}

exports.seq = async function(req, res, next) {
    try {
        await sequelize.authenticate();
        console.log("Sequelize Connection established");
        return res.status(200).json("Sequelize Connection established");
        next();
    } catch (error) {
        next(error);
    }
};