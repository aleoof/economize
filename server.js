const express = require('express');
var app = express();


//chamndo enjine do template
app.set('view engine','ejs');

//setando o index
app.get('/index',function(req, res) {
	res.render('pages/index')
});

app.get('/',function(req, res){
	res.render('pages/login')
})



app.listen(3000)
console.log('port 3000 ok')
