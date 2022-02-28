const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;


const app = express();
app.use(favicon(__dirname + '/icon/favicon.png'));


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, )));

app.get('*', function(req, res){
    if (req.accepts('html')) {
        res.send('404', '<script>location.href = "/err404.html";</script>');
        return;
    }
});


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(port);