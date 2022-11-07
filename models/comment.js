const { Model, DataTypes } = require('sequelize');
const Sequelize = require('../config/connection');

class Comment extends Model{};

Comment.init(
     {
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
   content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
   user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
        model: 'User',
        key: 'id'
    }
   }
}, 
{
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment',
    underscored: true
});

module.exports = Comment;