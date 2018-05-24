const express = require('express');
const app = express();


// test route
app.get('/', (req, res) => {

    res.send('Hallo');
});


/**
 * ========================= Server Run =================================
 * ======================================================================
 */

 const host = '127.0.0.1';
 const port = process.env.PORT || 3000;
 app.listen(port, host, () => {
     console.log(`server run on port http://${host}:${port}`);
 });