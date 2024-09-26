import express from "express"
import { createClient } from "redis"

const app = express()
app.use(express.json())

const client = createClient()
client.on("error",(err) => {
    console.log("redis_client_error", err)
})


app.post("/submit", async(req, res) => {
    const {problemId, code, language, userId} = req.body

    try{

        await client.lPush("problems", JSON.stringify({problemId, code, language, userId}))
        res.status(200).send("Submission received and stored.")

    }catch(error) {
        console.log("Redis error", error)
        res.status(500).send("Failed to store submission")
    }
})


async function startServer() {
    try {
        await client.connect()
        console.log("Connected to redis")

        app.listen(3002, () => {
            console.log("Server is listening on port 3002")
        })
    }catch(error){
        console.log("Failed to connect to redis", error)
    }
}

startServer()