import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreateExercise from './Pages/CreateExercise';
import EditExercise from './Pages/EditExercise';
import { useState } from 'react';
import NavBar from './Components/NavBar';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/create-exercise">
            <CreateExercise />
          </Route>
          <Route path="/edit-exercise">
            <EditExercise exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
