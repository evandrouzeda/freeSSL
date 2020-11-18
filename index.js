const express = require('express');

const app = express();
app.use(express.static('./src'))

app.listen(5000, _ => {
    console.log("escutando na 5000");
})