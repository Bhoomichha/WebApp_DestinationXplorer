const express = require('express');
const app = express();
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})
const port = 4041;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})