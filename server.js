var express = require('express');
var multer = require('multer');
var path = require('path');
var bodyParser = require('body-parser');
const crypto = require('crypto');


var app = new express();

app.set('port', (process.env.PORT || 3030));

// 支援 json 輸出
app.use(bodyParser.json());

// 設定靜態網頁
app.use(express.static('public'));


// get image from client
var storage = multer.diskStorage({
    destination: 'uploads',
    filename: function(req, file, cb) {
        var sha256 = crypto.createHash('sha256');
        cb(null, sha256.update(file.originalname + process.hrtime()).digest('hex') + '.jpg');
    }
});

app.post('/upload', multer({
    storage: storage
}).single('upload'), function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var cp = require('child_process');

    var ls = cp.spawn('py', ['retraining.py ', './uploads/' + req.file.filename] /*args*/ , {} /*options, [optional]*/ );

    ls.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
        var data = JSON.parse(data);
        res.json({ result: true, data: data });
    });

    ls.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });

    ls.on('exit', function(code) {
        console.log('child process exited with code ' + code);
    });

});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});