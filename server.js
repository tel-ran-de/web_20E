const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
    origin: "http://127.0.0.1:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();




app.get('/', (req, res) => {
    res.json({code: 200, message: 'Hello World!'});
});

app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>");
});

require("./routes/author.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});