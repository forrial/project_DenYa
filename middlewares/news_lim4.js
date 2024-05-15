const { app } = require('apico/server.js');
const mysql = require('mysql2');


app.use(function( req, res, next){
    

    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'test_proj',
        password: 'root12345'
      });
    
      let sql = `SELECT *, date_format(posted_at, '%M %d, %Y') as posted_at, ifnull(subtitle, '') as subtitle from news_create ORDER BY id DESC LIMIT 4`; 
     // 2 sec 
      pool.query(sql, function(err, news, fields) {
        if(err) throw err;
        console.log('News were loaded: ', news);
        res.locals.all_news_lim_4 = news;

        next();

      });

     
});