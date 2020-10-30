import React, { useState, useEffect } from 'react';

import { fetchTotalData, fetchDailyData } from '../../services/india';

const IndiaMain = () => {
    const [totalData, setTotalData] = useState({});
    // const [dailymain, setDailyData] = useState({});
    const [dailyData, setDailyData] = useState({});
  
    useEffect(() => {
      const fetchApiTotal = async () => {
        setTotalData(await fetchTotalData());
      };
  
      const fetchApiDaily = async () => {
        setDailyData(await fetchDailyData());
      };
  
      fetchApiDaily();
      fetchApiTotal();
    }, []);

    return(

    )
};

export default IndiaMain