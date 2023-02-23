const { DataTypes } = require ("sequelize");

module.exports = (sequelize) =>{
    sequelize.define( "Activity", {
        /* id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, */
        activityName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM ("1", "2", "3", "4", "5"),
            allowNull: false
        },
        time: {
            type: DataTypes.TIME(4),
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM ("Summer", "Autumn", "Winter", "Spring"),
            allowNull: false
        },
        /* country: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false 
        },
        */
    },
    {
        timestamps : false,
    });
};