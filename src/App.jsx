import React, { useState } from 'react';
import './App.css';

function App() {
  const [activity, setActivity] = useState('Press the button to find an activity!');

  const fetchNewActivity = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error('Error fetching activity:', error);
      setActivity('Failed to fetch a new activity. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Do a new Activity</h1>
        <br></br><br></br><br></br><br></br>
        <p>{activity}</p>
        <br></br><br></br><br></br><br></br>
        <button onClick={fetchNewActivity}>Get New Activity</button>
      </header>
    </div>
  );
}

export default App;
