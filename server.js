const express = require('express')
const mongoose = require('mongoose');
const Auth = require('./models/authModel');

main().catch(err => console.log(err));
const app = express()
const port = 3000

app.use(express.json())

mongoose.set("strictQuery", false)
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster01.j2cmld8.mongodb.net/auth-data?retryWrites=true&w=majority&appName=cluster01')
    .then(() => {
        console.log("Connected to Mongo Database")
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }).catch((error) => {
        console.log(error)
    })
}

app.get('/', (req, res) => {
  res.send('Hello Node API!')
})

app.post('/auth', async(req, res) => {
    try {
        const auth = await Auth.create(req.body)
        res.status(200).json({
            auth
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


