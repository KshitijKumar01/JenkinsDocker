const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.json([
        {
            id : "1",
            name:"kshitij",
            age:23
        },
        {
            id : "2",
            name:"kumar",
            age:21
        },
        {
            id : "3",
            name:"sunny",
            age:24
        }
    ])
});

app.listen(5000, ()=>{
    console.log("app is running on 5000 port")
})