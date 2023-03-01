module.exports = (sequelize, Sequelize, Room) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: Sequelize.STRING
        },
        last_name:{
            type: Sequelize.STRING
        },
        room_id: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    User.belongsTo(Room, {foreignKey: "room_id", timestamps: false});

    return User;
}