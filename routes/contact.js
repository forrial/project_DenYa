const router = require('express').Router();
const { app } = require('apico/server.js');

const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'root12345',
    database: 'test_proj'
});

// contact/all
router.get('/all', function(req, res){
    pool.query(" select * from contact " , function(error, results, fields){
        res.json({ message: 'All contact', data: results });
        pool.end();
    });
});

// contact/create
router.post('/create', function(req, res){
    let { name, email, tel, message } = req.body;
        
        pool.query(` insert into contact( name, email, tel, message, created_at ) 
        values( ?, ?, ?, ?, now() )` , [name, email, tel, message], function(error, results, fields){
            res.json({ message: 'Create contact', error, data: results });
            
            });
});


// contact/update
router.put('/update', function(req, res){
    pool.query(' update contact set content = "best content ever2222" where id = 5 ' , function(error, results, fields){
    res.json({ message: 'Update contact', error, data: results });
    pool.end();
    });
});

// contact/delete
router.delete('/delete', function(req, res){
    pool.query(' delete from contact where id = 10 ' , function(error, results, fields){
    res.json({ message: 'Delete contact', error, data: results });
    pool.end();
    });
});

// contact/:id
router.get('/:id', function(req, res){
    
    pool.query(' select content from contact where id =  ' + req.params.id , function(error, results, fields){
    res.json({ message: 'Get contact by id', error, data: results });
    pool.end();
    });
});

app.use( '/contact', router );