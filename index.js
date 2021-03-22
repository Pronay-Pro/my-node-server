const express = require('express');


const app = express();
// const  rootCall = (req,res) =>res.send('hello world');

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

app.listen(3000 , () => console.log('listening on port 3000'));