const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }
  

User.init(
     {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
           len: [8],
        },
    },

}, 
{
    hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeBulkCreate: async (newUserData) => {
            for (var i = 0; i < newUserData.length; i++ ) {    
                newUserData[i].password = await bcrypt.hash(newUserData[i].password, 10)
            }
            return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'User',
    underscored: true
}
);



module.exports = User;