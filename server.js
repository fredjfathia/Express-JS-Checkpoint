const express =require("express")
const hbs=require("hbs")
const app=express()

app.use(date =(req,res,next)=>{
    let newdate=new Date()
    console.log(newdate)
    let hours=newdate.getHours()
    let day=newdate.getDay()
    if((hours<16|| hours>17)&&(day==3 || day==0)){
        res.send('web site is closed')
    }
    else{next()}
})

app.set('view engine',hbs)
app.get('/home',(req,res)=>{
    res.render('home.hbs',{title:'home'})
})
app.get('/service',(req,res)=>{
    res.render('home.hbs',{title:'services'})
})
app.get('/contact',(req,res)=>{
    res.render('home.hbs',{title:'contacts'})
})



app.listen(3000,(err)=>{
if(err)console.log("server is not runing")
else console.log("server is runing on port 3000")
})
