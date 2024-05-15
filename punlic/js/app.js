const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const app =express();
const port = 3000;
const data  = {
    links: [
        { name: "Reflect", url: "#Reflect" },
        { name: "Recover", url: "#Recover" },
        { name: "Relax", url: "#Relax" }
    ]
};

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
