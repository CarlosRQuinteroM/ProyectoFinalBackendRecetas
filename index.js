const express = require('express');
require('dotenv').config();
const router = require('./router')
const db = require('./config/mongoose.js');
const app = express();
const port = process.env.DB_PORT;
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(router);

db
.then(() => {
app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message))
