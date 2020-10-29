import axios from 'axios';

const UPDATES_URL = 'https://api.covid19india.org/updatelog/log.json';
const DAILY_DATA = 'https://api.covid19india.org/data.json';
const RAW_PATIENT_DATA = 'https://api.covid19india.org/raw_data5.json';


export const fetchUpdates = async () => {
  try {
    const { data } = await axios.get(UPDATES_URL);

    return data.reverse().slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};