import React from 'react';
import { MdDelete} from 'react-icons/md';


function Row1({exercise, itemDelete}) {

    return (

        <tr>

            <td>{exercise.name}</td>

            <td>{exercise.reps}</td>

            <td>{exercise.weight}</td>

            <td>{exercise.unit}</td>

            <td>{exercise.date}</td>
            
            <td>< MdDelete onClick = { () => itemDelete(exercise._id)} /></td>
            


        </tr>



    );
}


export default Row1;