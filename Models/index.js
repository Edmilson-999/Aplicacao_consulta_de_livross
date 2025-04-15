const sequelize = require('../Config/database');
const Author = require('./Author');
const BooK = require('./Book');


const models = {
    Author,
    BooK
}

Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models)
    }
})

module.exports = {
    ...models,
    sequelize
};