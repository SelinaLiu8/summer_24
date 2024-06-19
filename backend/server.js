const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const context = {
        main: "/api/",
      };
    res.json(context);
})

app.listen(8000, () => {
    console.log('Port is listening')
});