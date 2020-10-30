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

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(DAILY_DATA);
    const total = data.cases_time_series;
    const date = total.map((day) => day.date);

    const totalConfirmed = total
      .map((day) => day.dailyconfirmed)
      .map((confirmed, index) => {
        return {
          x: date[index],
          y: confirmed,
        };
      });

    const totalDeceased = total
      .map((day) => day.dailydeceased)
      .map((deceased, index) => {
        return {
          x: date[index],
          y: deceased,
        };
      });

    const totalRecovered = total
      .map((day) => day.dailyrecovered)
      .map((recovered, index) => {
        return {
          x: date[index],
          y: recovered,
        };
      });
      
  } catch (error) {
    console.log(error);
  }
};

export const fetchTotalData = async () => {
  try {
    const { data } = await axios.get(DAILY_DATA);
    const total = data.cases_time_series;
    const date = total.map((day) => day.date);

    const totalConfirmed = total
      .map((day) => day.totalconfirmed)
      .map((confirmed, index) => {
        return {
          x: date[index],
          y: confirmed,
        };
      });

    const totalDeceased = total
      .map((day) => day.totaldeceased)
      .map((deceased, index) => {
        return {
          x: date[index],
          y: deceased,
        };
      });

  } catch (error) {
    console.log(error);
  }
};