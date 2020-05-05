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

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: "true",
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#000000",
            fill: "true",
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};
