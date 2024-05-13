const express  =require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).send({ message: "hello world!"})
})

app.listen(8080, (req, res) => console.log("app listening on 8080 port"));