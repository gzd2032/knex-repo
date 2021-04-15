const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = process.env.PORT || 3000;
const knex = require('knex');
const knexfile = require('./knexfile.js');
const db = knex(knexfile[process.env.NODE_ENV]);

app.get('/movies', (req, res) => {
    db
        .select('*')
        .from('movies')
        .then(data => res.status(200).json(data))
        .catch( err => 
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again.'
            })
        );

});

app.listen(PORT, () => {
    console.log(`The server is running on port:${PORT}.`)
})