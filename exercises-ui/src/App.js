import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreateExercise from './Pages/CreateExercise';
import EditExercise from './Pages/EditExercise';

function App() {

  return (
    <div>
      <Router>
        <div>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create-exercise">
            <CreateExercise />
          </Route>
          <Route path="/edit-exercise">
            <EditExercise />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
