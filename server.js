const express = require('express');
//const session = require('express-session');
//const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const sequelize = require('sequelize');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }));

// Set up Handlebars as the template engine
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');

// Set up MySQL and Sequelize
const { Sequelize, DataTypes } = sequelize;
const sequelizeInstance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// Define Model
const Data = sequelizeInstance.define('Data', {
    // Define your model fields here
});

// Routes
const dataRoutes = require('./routes/dataRoutes');
app.use('/api/data', dataRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
