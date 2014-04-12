var express = require('express'),
    app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.logger());

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(app.get('port'));
 console.log('Express server listening on port ' + app.get('port'));