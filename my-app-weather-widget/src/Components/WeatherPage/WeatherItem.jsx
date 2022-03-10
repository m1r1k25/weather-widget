import React from 'react';
import styles from './WeatherPage.module.css';

const WeatherItem = ({state}) => {
  const {day, date, cloudImg, moonImg, wind, coorUp, coorDown } = state
  const startCoordinate = 53;
  
  return (
    <div className={styles.blockWeatherContainer}>
      <div className={styles.dayContainer}>{day}</div>
      <div className={styles.dateContainer}>{date}</div>
      <div className={styles.iconContainer}>
        <img src={require(`./../../assets/images/${cloudImg}`)}></img>
      </div>
      <div className={styles.emptyContainer1}>
        <div
          style={{ top: `${startCoordinate + coorUp}px` }}
          className={styles.round}
        >
          <svg xmlns="https://upload.wikimedia.org/wikipedia/commons/4/4e/Breezeicons-actions-22-draw-circle.svg">
            <circle cx="5" cy="5" r="5" fill="white" />
          </svg>
        </div>
      </div>
      <div className={styles.emptyContainer2}>
        <div
          style={{ top: `${startCoordinate + coorDown}px` }}
          className={styles.round}
        >
          <svg xmlns="https://upload.wikimedia.org/wikipedia/commons/4/4e/Breezeicons-actions-22-draw-circle.svg">
            <circle cx="5" cy="5" r="5" fill="white" />
          </svg>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <img src={require(`./../../assets/images/${moonImg}`)}></img>
      </div>
      <div className={styles.windSpeedContainer}>
        <span>↗ {wind}</span>
      </div>
    </div>
  )
}

export default WeatherItem;

