const { User } = require ('../models')

const userdata = [
    {
        username: 'daffy',
        password: 'daffyduck',

    },
    {
        username: 'kitty',
        password: 'hellokitty'
    },
    {
        username: 'farley',
        password: 'chickenbacon'
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
