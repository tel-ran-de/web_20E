const express = require('express')
const cors = require('cors')
const db = require('./models')

const PORT = process.env.PORT || 8080
const app = express()

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.mongoose
    .connect(db.url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        console.log("Connected to database!")
    } )
    .catch( err => {
        console.log( "Can't connect to database'" )
    })

app.get('/', (req, res) => {
    res.send({message: "Hello"})
})

require('./routes/posts.routes')(app)

app.listen(PORT, () => {
    console.log(`Server is running on port= ${PORT}`);
})