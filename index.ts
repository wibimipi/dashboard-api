import express from "express"

const port = 8000

const server = express()

server.get("/hello", (req, res) => {
    res.send("Hello")
})


server.listen(port, () => {
    console.log(`Server starts on http://localhost:${port}`)
})