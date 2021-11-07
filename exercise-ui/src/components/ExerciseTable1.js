import React from 'react';
import Row1 from './Row1';


function ExerciseTable1({ exercises, itemDelete }) {

    return (

        <table>
            
            <caption> Exercise Information Table</caption>
            <thead>

                <tr>

                    <th>Name__</th>

                    <th>Reps__</th>

                    <th>Weight__</th>

                    <th>Unit__</th>

                    <th>Date__</th>

                    <th>Delete</th>



                </tr>
            </thead>

            <tbody>

                {exercises.map((exercise, i) => <Row1 exercise = {exercise} 
                
                itemDelete={itemDelete}
                key ={i} />)}




            </tbody>

        </table>

    );


}


export default ExerciseTable1;