const express = require('express');
const morgan = require('morgan');


const app = express();

// app.use(morgan('dev'));

function customMiddleware(req, res, next) {
    if (req.url === '/help') {
        res.send('<h1>the site is blocked by Administrator</h1>');
    }
    next()
}

function tinyLogger() {
    return (req, res, next) => {
        console.log(`${req.method} - ${req.url}`)
        next();
    }
}

const middleware = [customMiddleware, tinyLogger()]

app.use(middleware)

app.use(customMiddleware)

app.get('/about', morgan('dev'), (req, res) => {
    res.send('<h1>i am about page</h1>');

})

app.get('/help', (req, res) => {
    res.send('<h1>i am help page</h1>');
})

app.get('/', (req, res) => {
    res.send('<h1>I am Listening</h1>');

})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})