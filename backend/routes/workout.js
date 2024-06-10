const express = require("express")
const workoutController = require("../controllers/workoutController")

const { getWorkouts, getWorkout,createWorkout, updateWorkout, deleteWorkout } = workoutController

const router = express.Router()

// GET ALL WORKOUTS
router.get("/", getWorkouts)

// GET A SINGLE WORKOUT
router.get("/:id", getWorkout)

// ADD NEW WORKOUT
router.post("/", createWorkout)

// UPDATE WORKOUT
router.patch("/:id", updateWorkout)

// DELETE WORKOUT
router.delete("/:id", deleteWorkout)


module.exports = router

