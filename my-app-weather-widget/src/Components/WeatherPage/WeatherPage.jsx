import React from 'react';
import styles from './WeatherPage.module.css';
import store from './../../store/store';
import WeatherItem from './WeatherItem';

const WeatherPage = () => {
  const state = store._weatherPage

  const weatherList = state.map((item) => <WeatherItem state={item} />);

  return (
    <div className={styles.weatherPageContainer}>
      {weatherList}
      <div className={styles.graphic1}>
        <svg className={styles.svg}>
          <polyline
            points="120,60 360,60 600,40 840, 40 1080, 60"
            fill="none"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </div>
      <div className={styles.graphic2}>
        <svg className={styles.svg}>
          <polyline
            points="120,60 360,40 600,40 840, 60 1080, 60"
            fill="none"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default WeatherPage;
