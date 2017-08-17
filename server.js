var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
content: `<h1>
    How important is reforstation?
</h1>
<p>
    Deforestation is the most devastating environmental issue. Living things need some basic necessities for their survival such as food, habitat, water, air, etc.  These elements support life. Wild animals and birds depend on the forest for their habitat and fundamental necessities.  Deforestation destroyed the habitat and led to an environmental imbalance.  Reforestation is one of the solutions for deforestation'</p>` 
};

function createtemplate(data) {
    var content = data.content;
var htmltemplate = `<!DOCTYPE html>
<style>
    .lol {
        max-width: 800px;
        margin:0 auto;
        color:green;
        font-family:sans-serif;
    }
</style>
<div class="lol">
   
    <div class="picture">
         <style> .picture {
    margin:0 auto
    max-width:1000px</style>
    <img src="http://blogs.agu.org/geospace/files/2016/07/1024px-Reforestation_Southern_Oregon_2.jpg" alt="yay" height="500" width="500">
    </div>
${content}
</div>
</html> `;
 return htmltemplate;
 }
 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res) {
    res.send(createtemplate(articleone));
});

app.get('/article-two',function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'A2.html'));
});

app.get('/article-three',function(req, res) {
    res.send('article three is requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
