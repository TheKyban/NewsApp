const express = require("express")
const axios = require("axios")

const app = express()




const end_point = "https://newsapi.org/v2/everything?"
const api = "&apiKey=cf55f43790a14c95a14e6b8e12256c6b"

app.get("/", async (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/api", async (req,res)=>{
    // console.log(req._parsedUrl.query)
    let r = await axios(end_point+req._parsedUrl.query)
    let a = r.data
    res.json(a)
    console.log(a)
})

app.listen(process.env.PORT || 7575 , ()=>{
    console.log("Server is started...")
})