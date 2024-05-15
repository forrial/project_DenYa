const router = require('express').Router();
const { app } = require('apico/server.js');

router.post('/registration', async( req, res )=>{
    res.json({"message": "APi works"});
});

app.use('/auth', router);