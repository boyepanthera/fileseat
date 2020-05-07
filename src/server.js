const express = require('express');

const app =  express ();

app.get('/', (req, res)=> {
    console.log(req.file)
    res.json({message: 'Hey you did it'})
})

app.listen(9090, ()=> console.log('server started!'))