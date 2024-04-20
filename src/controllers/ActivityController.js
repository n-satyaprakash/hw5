import React, { useState } from 'react';
import ActivityView from '../views/ActivityView';
import { fetchActivity } from '../models/ActivityModel';

function ActivityController() {
  const [activity, setActivity] = useState('');

  async function handleNewActivity() {
    try {
      const data = await fetchActivity();
      setActivity(data.activity);
    } catch (error) {
      console.error(error);
      setActivity('Failed to fetch a new activity. Please try again.');
    }
  }

  return <ActivityView activity={activity} onNewActivity={handleNewActivity} />;
}

export default ActivityController;
