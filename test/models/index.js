const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const saltRounds = 10;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, saltRounds);
});

User.beforeUpdate(async (user) => {
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
});

const TestTable = sequelize.define('TestTable', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

User.hasMany(TestTable, {
    foreignKey: 'user_id',
  onDelete: "cascade",
});

TestTable.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    sequelize,
    User,
    TestTable
};
