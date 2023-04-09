import axios from 'axios';

const url = 'http://localhost:5000/wap';

export async function getAllLocations() {
  try {
    const records = await axios.get(`${url}/getAllLocations`);
    return records;
  } catch (error) {
    console.error(error.message);
    return error;
  }
}

export async function placeholder() {
  return 'slay';
}
