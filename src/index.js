const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://tinyblog:tinyblog2018@ds123625.mlab.com:23625/tiny-blog', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));
app.listen(3010, () => {
    console.log("Server listening on port 3010.\nClick to open: http://localhost:3010");
});