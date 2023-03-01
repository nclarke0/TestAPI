module.exports = (sequelize, Sequelize) =>{
    const Room = sequelize.define("room", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        room_num: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    })

    return Room;
}