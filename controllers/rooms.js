const router = require('../routes/rooms');
const utilities = require('../utilities/utility');
const db = require('../models');
const Room = db.room;

getAll = async(req, res) =>{
    const room = await Room.findAll();
    res.status(200).json(room);
}

getById = async(req, res) => {
    const id = req.params.id;
    try{
        const room = await Room.findByPk(id);

        if(room == null){
            throw new Error("Tool with id: " + id + " does not exist in the database!");
        }

        res.status(200).json(room);
    }
    catch(err){
        utilities.formatErrResp(res, 400, err.message);
    }
}

module.exports = {getAll, getById}