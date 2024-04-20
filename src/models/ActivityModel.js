export async function fetchActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity');
    if (!response.ok) {
      throw new Error('Failed to fetch the activity');
    }
    return response.json();
  }
  