import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditExercise({exerciseToEdit}) {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise!");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}.`)
        }
        history.push("/");
    }

    return (
        <div className="page">
            <div className="flex-container">
                <h2 className="flex-item">Edit Exercise</h2>
                <p>Did you lie about the weight again?</p>
                <div className="flex-item displayed-items">
                    <div className="flex-container">
                        <div className="flex-item">
                            <input cv
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            <input
                                type="number"
                                value={reps}
                                onChange={e => setReps(e.target.value)} />  
                            <input
                                type="number"
                                value={weight}
                                onChange={e => setWeight(e.target.value)} /> 
                            <select
                                type="text"
                                value={unit}
                                onChange={e => setUnit(e.target.value)}>
                                    <option value="lbs">lbs</option>
                                    <option value="kgs">kgs</option>  
                            </select>
                            <input
                                type="text"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                        </div>
                        <div className="flex-item">
                            <button id="button"
                                onClick={editExercise}
                            >Save</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default EditExercise;