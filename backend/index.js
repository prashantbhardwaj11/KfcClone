const express = require('express');
const app = express();

const port= 3001;

app.get('/', (req, res) => {
    res.json('Ok Test Request')
})

app.listen(port,()=>{
    console.log('Conn Success on ',port);
})

