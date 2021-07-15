const express = require('express')
const products = require('./products')
const clients = require('./clients')
const purchases = require('./purchases')
const sales = require('./sales')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/products', products)
app.use('/clients', clients)
app.use('/purchases', purchases)
app.use('/sales', sales)

app.all('*',(req, res)=>{
  res.status(500).send("Ruta incorrecta, intente nuevamente");
})

app.listen(8080);
