const express=require('express');
const app=express();
const PORT=6060;
app.use('/',express.static(__dirname+'/public'))
function redirectHome(req,res,next)
{
   res.sendFile('/index.html')
}
app.get('/database',(req,res,next)=>{
    if(req.query.api!=undefined)
    {
        res.send('You have access to database');
    }
    else{
        next()
    }
    }
,redirectHome)
app.listen(PORT,()=>{console.log('Server started')})