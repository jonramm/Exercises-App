import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ExerciseList from '../Components/ExerciseList';

function HomePage({setExerciseToEdit}) {

    const [exercises, setExercises] = useState([]);

    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    const greetingArray = [
        "Gaze upon the glory of your commitment to health!",
        "Your accomplishments are an inspiration to all others!",
        "The New Year's resolution that actually worked!",
        "This legitimizes all that beer!"
    ]

    const [exerciseGreeting, setGreeting] = useState(greetingArray[Math.floor(Math.random() * 4)])

    useEffect(() => {
        loadExercises();
    }, []);

    useEffect(() => {
        setInterval(() => {
          setGreeting(greetingArray[Math.floor(Math.random() * 4)])
        }, 5000);
      },[])

    return (
        <div className="page">
            <div className="flex-container">
                <h2 className="flex-item">YOUR EXERCISES</h2>
                <p>{exerciseGreeting}</p>
                <ExerciseList className="flex-item" exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
                <div className="displayed-items">
                    <Link to="/create-exercise" className="react-link">CREATE EXERCISE</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage