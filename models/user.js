const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const connection = require('../config/connection');
const bcrpyt = require('bcrypt');

const User = sequelizeConnection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: sequelize.string,
        allowNull: false,
        validate: {
            len: [4],
        }
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
           len: [8]
        }
    }

},
{
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
 },
  {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'user',
    underscored: true
});

User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;