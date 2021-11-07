import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import {CreateExercisePage} from './pages/CreateExercisePage';



function App() {

  return (

    <div className="App">
      <Router>
        <div className="App-header">

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/create-exercise" >
            <CreateExercisePage />
          </Route>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
