const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/Workouts", ({ body }, res) => {
  console.log("add new workout");
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/Workouts/:id", ({ body }, res) => {
  console.log("update workout");
  Workout.create(body)
  .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
  .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
