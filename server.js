const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


// Routes 
app.use('/', (req, res) => {
    res.send("Server on");
});

// Catch 404 errors 
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Errors handler function 
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    // Respond to client 
    res.status(status).json({
        error: {
            message: error.message
        }
    });
    // Respond to ourselves 
    console.error(err);
});

// Start to server  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));