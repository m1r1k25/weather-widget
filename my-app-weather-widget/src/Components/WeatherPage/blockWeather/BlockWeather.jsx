import React from "react";
import styles from "./BlockWeather.module.css";

const BlockWeather = (props) => {
   let state = props.getState()
   return (
      <div div className={styles.blockWeatherContainer} >
         <div className={styles.dayContainer}>{state.day}</div>
         <div className={styles.dateContainer}>sdfsaf</div>
         <div className={styles.iconContainer}>
            <img></img>
         </div>
         <div className={styles.emptyContainer}></div>
         <div className={styles.emptyContainer}></div>
         <div className={styles.windContainer}>etw</div>
         <div className={styles.iconContainer}>sdfsaf</div>
         <div className={styles.windSpeedContainer}>sdfsaf</div>
      </div>
   )
}

export default BlockWeather;