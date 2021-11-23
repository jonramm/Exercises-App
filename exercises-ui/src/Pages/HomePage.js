import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ExerciseList from '../Components/ExerciseList';

function HomePage() {

    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);


    return (
        <>
            <h1>Home</h1>
            <ExerciseList exercises={exercises}></ExerciseList>
            <Link to="/add-exercise">Add Exercise</Link>
        </>
    );
}

export default HomePage