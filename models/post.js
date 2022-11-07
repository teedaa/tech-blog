const { Model, DataTypes } = require('sequelize');
const Sequelize = require('../config/connection');

class Post extends Model{};
  

Post.init(
     {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
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
}, {
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'post',
    underscored: true
});

module.exports = Post;