require('dotenv').config();  // Load environment variables

const express = require('express');
const app = express();
const router = require('./router');
const port = 8000 | process.env.DATABASE_URL;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is listening at ${port}>>>`);
});
