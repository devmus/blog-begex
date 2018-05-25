const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


// Set dinamic Public folder
app.use('/static', express.static(path.join(__dirname, 'public')));

// Set views engine Handlebars template 
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');


// test route
app.get('/', (req, res) => {

    res.render('home');
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