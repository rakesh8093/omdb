exp=require("express")
app=exp()
mj=require("mongojs")
bp=require("body-parser")
app.use(bp.json())
app.listen(1000)
console.log("server started")
mj=require("mongojs")
con=mj("mongodb://localhost:27017/moviedetais")
console.log("hii")
// app.post("/getdata",function(req,res){
//  console.log(req.body)
//    newid=101
//   mj.find(find({"Title":"Batman"}))
//    con.tbl_moviedetails.find().sort({_id:-1}).limit(101,(err,result)=>{

//      if(result.length!=0){
//        newid=result[0]._id
//        newid=newid+1
//       }
//       cont=req.body
//       cont._id=newid
//       console.log("data is inserting...")
//       con.tbl_moviedetails.insert(cont)
//       res.send({result:"data inserted"})
//    })
//   })

  //  app.post("/sendmovie",(req,res)=>{
  //   console.log(req.body)
  //   con.tbl_moviedetails.insert(req.body)

  //       res.send("inserted ")

  //   })


app.post("/getmovie",(req,res)=>{
  console.log(req.body)
  con.tbl_moviesequel.find(req.body,(err,result)=>{
    res.send(result)
    console.log(result)
  })
})
// app.post("/getmovieId",(req,res)=>{
//   console.log(req.body)
//   con.tbl_moviedetails.find(req.body,(err,result)=>{
//     res.send(result)
//     console.log(result)
//   })
// })

app.post("/sendmovie",(req,res)=>{
  console.log(req.body)
  con.tbl_moviedetails.insert(req.body)
  res.send("inserted moviee")
  })

app.post("/sendsequles",(req,res)=>{
  console.log(req.body)
  con.tbl_moviesequel.find(req.body,(err,result)=>{
    res.send(result)
    console.log(result)
  })
})
