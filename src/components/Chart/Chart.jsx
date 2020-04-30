import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

export const Chart = () => {
  const [dailyData, setDailyData] = useState([]); 

  useEffect(() => {
    //instant return function
    (async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    })();

    // fetchAPI();
  }, []);
  console.log(dailyData);

  const lineChart = !!dailyData.length ? (
    <Line
      data={{
        labels: "",
        datasets: [{}, {}],
      }}
    />
  ) : null;

  return <div>Chart</div>;
};
