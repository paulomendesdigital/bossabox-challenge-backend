const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

// Config mongoose
mongoose.connect("mongodb://localhost/bossabox", {useNewUrlParser: true})
            .then(() => {console.log('MongoDB connected') })
            .catch((err) => {console.log('MongoDB error connection: ' + err) })

app.use('/', require('./routes/app'))

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is runnig at port ' + PORT)
})