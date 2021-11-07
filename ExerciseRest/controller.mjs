import * as exercises from "./model.mjs";

import express from 'express';


const PORT = 3000;

const app = express();


app.use(express.json());


app.post('/exercises', (req, res) => {

    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: "An error occured attempting to create this exercise"});

        });
});



app.get('/exercises', (req, res) => {

    exercises.findExercise()
        .then(exercise => {res.status(200).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: "An error occured attempting to retrieve exercises"});

        });

});






app.delete('/exercises/:_id', (req, res) => {

    exercises.deleteExercise(req.params._id)

        .then(numberDeleted => {

            if (numberDeleted === 1) {
                res.status(204).send();

            } else {
                res.status(500).json({ Error: "Error while attempting to delete, this ID not found"});
            }
        })
        .catch(error => {

            console.error(error);

            res.status(500).json({ Error: "An unknown error occurred while attempting to delete an exercise"})

        });

});




app.listen(PORT, () =>  {
    console.log('Server up and running');

});