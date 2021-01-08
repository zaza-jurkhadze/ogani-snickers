const express = require('express');


const index = express(); 



const port = 3000;
index.listen(port, () => {
    console.log(`app.running on port ${port}`);
});