const express = require('express');
const cors = require('cors');

const db = require('./models')

const PORT = process.env.PORT || 8080

const app = express()
const corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.sequelize.sync()
    .then(() => {
        console.log( 'Db Resync' )
    })

app.get('/', (req, res) =>{
    res.json({message: 'Hello, world!'});
})

require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)


app.listen(PORT, () => {
    console.log( `Server is running on port=${PORT}` )
})
