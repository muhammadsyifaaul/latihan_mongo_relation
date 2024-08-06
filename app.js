const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
const expressLayouts = require('express-ejs-layouts')


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded({extended: true}))

app.use('/',userRoutes)

app.listen(3000,() => {
    console.log('server running succesfully')
})