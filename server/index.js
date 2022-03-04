const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/ping', (req, res) => {
    res.json({ message: 'Ping ping ping!'});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});