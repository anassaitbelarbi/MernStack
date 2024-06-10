const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")


// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
    try {
        const workout = await Workout.find({}).sort({ createdAt: -1 })
        res.status(200).json(workout)

    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

// GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No such workout" })
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ message: "No such workout" })
    }

    res.status(200).json(workout)
}

// CREATE NEW WORKOUT
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)

    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}


// UPDATE WORKOUT
const updateWorkout = async (req, res) => { 
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No such workout" })
    }

    const workout = await Workout.findOneAndUpdate({_id : id}, {...req.body})

    if (!workout) {
        res.status(400).json({ message: "No such workout" })
    }

    res.status(200).json(workout)
}

// DELETE WORKOUT
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No such workout" })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        res.status(400).json({ message: "No such workout" })
    }

    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}

