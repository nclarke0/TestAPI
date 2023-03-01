const router = require("../routes/users");
const utilities = require('../utilities/utility');
const db = require('../models');
const User = db.user;
const Room = db.room;

getAll = async (req, res) => {
    const user = await User.findAll({
        include:[{
            model: Room,
            attributes: {
                exclude: ['id']
            }
        }]
    });

    if(user !== null && user.length > 0){
        res.status(200).json(user);
    }
    else{
        res.status(304).send("");
    }
}

getById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id, {
        include:[{
            model: Room,
            attributes: {
                exclude: ['id']
            }
        }]
    });

    console.log(user);
    if(user !== null){
        res.status(200).json(user);
    }
    else{
        utilities.formatErrResp(res, 400, "No such user was found in the database!");
    }
}

module.exports = {getAll, getById}