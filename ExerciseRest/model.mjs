import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/exercises', {useNewUrlParser: true, useUnifiedTopology: true}
);


const db = mongoose.connection;


db.once('open', () => {
    console.log('Successfuly using mongoose and connected to database');

});

mongoose.set('useCreateIndex', true);



const exercise_Schema = mongoose.Schema({
    name: {type: String, required: true },
    reps: {type: Number, required: true },
    weight: {type: Number, required: true },
    unit: {type: String, required: true },
    date: {type: String, required: true }

});


const Exercise = mongoose.model('Exercise', exercise_Schema);





export const createExercise = async (name, reps, weight, unit, date) => {

    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date});

    return exercise.save();

}



export const findExercise = async () => {
    const query = Exercise.find();
    return query.exec();

}




export const deleteExercise = async (_id) => {


    const solution = await Exercise.deleteOne({ _id: _id });
    return solution.deletedCount;

}




