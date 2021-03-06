const express = require('express');
const cors = require('cors');
const app = express();

//middlwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use(require('./routes/index'));

const PORT = process.env.PORT || 3001;
app.listen( PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});