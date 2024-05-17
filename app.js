const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');

const app = express();
const port = 3000;

const data = {
    links: [
        { name: "Reflect", url: "#Reflect" },
        { name: "Recover", url: "#Recover" },
        { name: "Relax", url: "#Relax" }
    ]
};

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    console.log('Rendering home page with data:', data);
    res.render('home', data);
});

app.get('/test', (req, res) => {
    res.send('Test route is working!');
});

app.use((err, req, res, next) => {
    console.error(rr.stack);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
