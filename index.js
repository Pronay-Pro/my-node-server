const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();
app.use(cors())
app.use(bodyParser.json())

const user = ["Asad","Pronay", "Sohan","Emon"]

 app.get('/' ,(req, res)=>{
        const fruit = {
            product :'ada',
            price : 100
        }


     res.send(fruit);
 });
app.get('/fruits/banana' ,(req, res)=>{
    res.send({fruit:'banana' , quantity : 1000, price : 1000})
})
app.get('/user/:id' ,(req, res)=>{
    const id = req.params.id;
    const name = user[id]
    res.send({id,name})
})

//post request

app.post('/addUser',(req, res)=>{
    // save to database
    const user = req.body
    user.id = 55,
   res.send(user)
})

app.listen(3000 , () => console.log('listening on port 3000'));