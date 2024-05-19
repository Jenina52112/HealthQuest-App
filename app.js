const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const data = {
    links: [
        { name: "Reflect", url: "#Reflect" },
        { name: "Recover", url: "#Recover" },
        { name: "Relax", url: "#Relax" }
    ]
};

const users = {
    'user1': 'password1',
}
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

app.get('/login', (req, res) => {
    res.render('login', { layout: 'main', loginPage: true });
});

app.get('/signup', (req, res) => {
    res.render('signup', { layout: 'main', loginPage: true });
});


app.get('/test', (req, res) => {
    res.send('Test route is working!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
