const express = require('express');
const app = express();
const PORT = 3000;
app.use()

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})





