import React from 'react';

function ActivityView({ activity, onNewActivity }) {
  return (
    <div>
      <h1>Activity Finder</h1>
      <p>{activity || "Click the button to find a new activity!"}</p>
      <button onClick={onNewActivity}>Get New Activity</button>
    </div>
  );
}

export default ActivityView;
