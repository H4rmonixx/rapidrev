const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hello World');
});

app.listen(80, (err)=>{
    if(err) console.log(`Cannot run server: ${err}`);
    else console.log('Server running on port 80');
});