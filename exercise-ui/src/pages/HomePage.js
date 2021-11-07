import React from 'react';
import { Link } from 'react-router-dom';

import ExerciseTable1 from '../components/ExerciseTable1';
import { useState, useEffect} from 'react';




function HomePage() {

    const [exercises, setExercises] = useState([]);


    const itemDelete = async _id => {
        const infoTransfer = await fetch(`/exercises/${_id}`, {method: 'delete'});
        if (infoTransfer.status === 204) {

            const updatedExercises = exercises.filter(ex => ex._id !== _id);

            setExercises(updatedExercises);

        }
        else {
            console.error('An error was encountered when trying to delete this item')


        }



    };


    const loadExercises = async () => {
        const informationRetrieve = await fetch('/exercises');

        const exercises = await informationRetrieve.json();
        
        setExercises(exercises);


    }


    useEffect(()  =>  {
        loadExercises();

    }, []);



    return (

        <>

            <h1>Exercise App HomePage</h1>


            <ExerciseTable1 exercises={exercises} itemDelete={itemDelete}></ExerciseTable1>


            <h2> Create Exercise Below</h2>

            <Link to='/create-exercise'> Click here to Create New Exercise! </Link>


        </>

    );


}

export default HomePage;