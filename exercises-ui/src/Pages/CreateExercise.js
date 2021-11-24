import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
        <>
            <h1>Create Exercise</h1>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                placeholder="Enter reps"
                value={reps}
                onChange={e => setReps(e.target.value)} />  
            <input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={e => setWeight(e.target.value)} /> 
            <input
                type="number"
                placeholder="Enter unit"
                value={unit}
                onChange={e => setUnit(e.target.value)} /> 
            <input
                type="text"
                placeholder="Enter date"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </>
    );
}

export default CreateExercise