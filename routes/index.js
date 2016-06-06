var express = require('express');
var router = express.Router();

var fs = require('fs');
var AdmZip = require('adm-zip');
var zlib = require('zlib');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readdir('./data/', function(err, files) {
        if(err) res.render('error', err);
        if(files.length < 0) res.render('error', { message: 'No file found' });

        var outputFiles = [];

        files.forEach(function(file) {
            console.log(file);

            var zip = new AdmZip('./data/' + file);
            var zipEntry = zip.getEntries()[0];

            outputFiles.push(zip.readAsText(zipEntry.entryName));
        });
    });
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
    fs.readdir('./data/', function(err, files) {
        if(err) res.render('error', err);
        if(files.length < 0) res.render('error', { message: 'No file found' });

        var outputFiles = [];

        file = files.slice(10);

        console.log(file);

        /* files.forEach(function(file) {
            console.log(file);

            var zip = new AdmZip('./data/' + file);
            var zipEntry = zip.getEntries()[0];

            outputFiles.push(zip.readAsText(zipEntry.entryName));
        }); */
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
