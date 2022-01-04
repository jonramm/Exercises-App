import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateExercise() {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}.`)
        }
        history.push("/");
    }

    return (
        <div className="page">
            <div className="flex-container">
                <h2 className="flex-item">Create Exercise</h2>
                <p>What have you conquered this time?</p>
                <div className="displayed-items">
                <div className="flex-item">
                    <div className="flex-container input">
                        <input className="flex-item"
                            type="text"
                            placeholder="exercise name"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                        <input className="flex-item"
                            type="number"
                            placeholder="reps"
                            value={reps}
                            onChange={e => setReps(e.target.value)} />  
                        <input className="flex-item"
                            type="number"
                            placeholder="weight"
                            value={weight}
                            onChange={e => setWeight(e.target.value)} /> 
                        <select className="flex-item"
                            type="text"
                            placeholder="unit"
                            value={unit}
                            onChange={e => setUnit(e.target.value)}>
                                <option value="" disabled selected hidden>unit</option>
                                <option value="lbs">lbs</option>
                                <option value="kgs">kgs</option>  
                        </select>
                        <input className="flex-item"
                            type="text"
                            placeholder="date"
                            value={date}
                            onChange={e => setDate(e.target.value)} />
                    </div>
                    </div>
                    <div className="flex-item">
                        <button id="button"
                            onClick={addExercise}
                        >CREATE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateExercise