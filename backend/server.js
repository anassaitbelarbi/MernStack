require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")

// express app
const app = express()

// middleware
app.use(express.json()) // attachement the data to object request to body to access it from request object (req.body)
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/workouts", workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to mongodb && listening to port 4000!!:::")
        })
    })
    .catch((err) => {
        console.log("err", err)
    })


