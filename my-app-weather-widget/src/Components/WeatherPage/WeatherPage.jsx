import React from "react";
import styles from "./WeatherPage.module.css";

const WeatherPage = (props) => {
   let state = props.getState()

   const startCoordinate = 53;

   const elements = state.map(item => {
      return <div div className={styles.blockWeatherContainer}>
         <div className={styles.dayContainer}>{item.day}</div>
         <div className={styles.dateContainer}>{item.date}</div>
         <div className={styles.iconContainer}>
            <img src={require(`./../../assets/images/${item.cloudImg}`)}></img>
         </div>
         <div className={styles.emptyContainer1}><div style={{ top: `${startCoordinate + item.coorUp}px` }} className={styles.round}><svg xmlns="https://upload.wikimedia.org/wikipedia/commons/4/4e/Breezeicons-actions-22-draw-circle.svg">
            <circle cx="5" cy="5" r="5" fill="white" />
         </svg></div></div>
         <div className={styles.emptyContainer2}><div style={{ top: `${startCoordinate + item.coorDown}px` }} className={styles.round}><svg xmlns="https://upload.wikimedia.org/wikipedia/commons/4/4e/Breezeicons-actions-22-draw-circle.svg">
            <circle cx="5" cy="5" r="5" fill="white" />
         </svg></div></div>
         <div className={styles.iconContainer}>
            <img src={require(`./../../assets/images/${item.moonImg}`)}></img>
         </div>
         <div className={styles.windSpeedContainer}>
            <span>↗ {item.wind}</span>
         </div>
      </div>
   })

   return (
      <div className={styles.weatherPageContainer}>
         {elements}
         <div className={styles.graphic1}>
            <svg className={styles.svg}>
               <polyline points="120,60 360,60 600,40 840, 40 1080, 60"
                  fill="none" stroke="white" stroke-width="3" />
            </svg>
         </div>
         <div className={styles.graphic2}>
            <svg className={styles.svg}>
               <polyline points="120,60 360,40 600,40 840, 60 1080, 60"
                  fill="none" stroke="white" stroke-width="3" />
            </svg>
         </div>
      </div>
   )
}

export default WeatherPage