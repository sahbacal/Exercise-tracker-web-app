import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



export const CreateExercisePage = () => {

    const [name, setName] = useState("")

    const [reps, setReps] = useState("")

    const [weight, setWeight] = useState("")

    const [unit, setUnit] = useState("")
    
    const [date, setDate] = useState("")

    const history = useHistory();

    const createExercise = async () => {

        const addedExercise = {name, reps, weight, unit, date};

        const informationRetrieved = await fetch('/exercises', {
            
            method: 'POST',
            body: JSON.stringify(addedExercise),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        if (informationRetrieved.status === 201){
            alert("Exercise created, well done!");
        } else{
            alert("Creating movie did not work!")
        }

        history.push("/");

    }

    return (


            

            <div>

                <h1>Create Exercise Page</h1>

                        <label>Name  
                            <input type ='text' value = {name}  size="12" maxlength = '13' required = 'required' onChange = {e => setName(e.target.value)} /> 
                        </label>
                        <br/>

                        <label>Reps
                            <input type ='number' value = {reps} size="12" maxlength = '13' required = 'required' onChange = {e => setReps(e.target.value)} />
                        </label>
                        <br/>

                        <label>Weight
                            <input type ='number' value = {weight} size="12" maxlength = '13' required = 'required' onChange = {e => setWeight(e.target.value)} />
                        </label>
                        <br/>

                        <label>Unit
                            <input type ='text' value = {unit} size="12" maxlength = '13' required = 'required' onChange = {e => setUnit(e.target.value)} />
                        </label>
                        <br/>

                        <label>Date
                            <input type ='text' value = {date} size="12" maxlength = '13' required = 'required' onChange = {e => setDate(e.target.value)} />
                        </label>
                        <br/>

                        <button onClick = {createExercise}>Create</button>

            </div>
                


     

    );


}


