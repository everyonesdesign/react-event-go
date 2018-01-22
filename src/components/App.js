import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import EventsView from '../containers/EventsView';

const App = () => (
    <div className="main-container">
        <Route path="/:favorites?" component={EventsView} />
    </div>
)

export default App
