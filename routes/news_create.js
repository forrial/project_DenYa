const router = require('express').Router();
const { app } = require('apico/server.js');

const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'root12345',
    database: 'test_proj'
});

// news_create/all
router.get('/all', function(req, res){
    pool.query(" select * from news_create " , function(error, results, fields){
        res.json({ message: 'All news_create', data: results });
        pool.end();
    });
});

// news_create/create
router.post('/create', function(req, res){
    let { posted_by, title, subtitle, content } = req.body;
        
        pool.query(` insert into news_create( posted_by, title, subtitle, content, posted_at ) 
        values( ?, ?, ?, ?, now() )` , [posted_by, title, subtitle, content], function(error, results, fields){
            res.json({ message: 'Create a news', error, data: results });
            
            });
});


// news_create/update
router.put('/update', function(req, res){
    pool.query(' update news_create set content = "best content ever2222" where id = 5 ' , function(error, results, fields){
    res.json({ message: 'Update news_create', error, data: results });
    pool.end();
    });
});

// news_create/delete
router.delete('/delete', function(req, res){
    pool.query(' delete from news_create where id = 10 ' , function(error, results, fields){
    res.json({ message: 'Delete news_create', error, data: results });
    pool.end();
    });
});

// news_create/:id
router.get('/:id', function(req, res){
    
    pool.query(' select content from news_create where id =  ' + req.params.id , function(error, results, fields){
    res.json({ message: 'Get news_create by id', error, data: results });
    pool.end();
    });
});

app.use( '/news_create', router );