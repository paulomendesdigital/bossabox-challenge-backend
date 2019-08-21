const express = require('express')

const app = express()
app.use(express.json())

app.use('/', require('./routes/app'))

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is runnig at port ' + PORT)
})