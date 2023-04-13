const express=require('express')
const app=express();
const list=[
"mohamed",
"khaled",
"goda",
"othman"
]
let items ="<ul>";
list.map(item=>(items+=`<li>${item}</li>`))
items+="</ul>"

app.get('/students',(req,res)=>{
    res.send(`<h1>${items}</h1>`)
   })

app.get('*',(req,res)=>{
    res.send(`<h1>page no found</h1>`)
})
app.listen(3005,(err)=>
{if(err)console.log(err)
console.log("application running")
}

)