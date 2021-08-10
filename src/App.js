import './App.css';
import React from 'react';

import Dashboard from "./components/dashboard";

function App() {
    return (
        <div className="app-container">
            <h1>These are the episodes</h1>
            <Dashboard />
        </div>
    );
}

export default App;
