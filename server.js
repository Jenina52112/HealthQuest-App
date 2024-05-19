const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sequelizeInstance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql'
});

const saltRounds = 10;

const User = sequelizeInstance.define('User', {
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

User.beforeCreate(async (user, options) => {
    user.password = await bcrypt.hash(user.password, saltRounds);
});

User.beforeUpdate(async (user, options) => {
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
});

const TestTable = sequelizeInstance.define('TestTable', {
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
});

TestTable.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

sequelizeInstance.sync().then(() => {
    console.log('Database & tables created!');
});

app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.create({ username, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const dataRoutes = require('./routes/dataRoutes');
app.use('/api/data', dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

