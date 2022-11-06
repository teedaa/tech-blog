const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const connection = require('../config/connection');


const Comment = sequelizeConnection.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
   post_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
        model: 'Post',
        key: 'id'
    }
   },
   user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
        model: 'User',
        key: 'id'
    }
   }
}, {
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comments',
    underscored: true
});

module.exports = Comment;