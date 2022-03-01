import React from "react";
import styles from "./WeatherPage.module.css";

const WeatherPage = (props) => {
   let state = props.getState()
   console.log(state)

   const elements = state.map(item => {
      return <div div className={styles.blockWeatherContainer}>
         <div className={styles.dayContainer}>{item.day}</div>
         <div className={styles.dateContainer}>{item.date}</div>
         <div className={styles.iconContainer}>
            <img src={require(`./../../assets/images/${item.cloudImg}`)}></img>
         </div>
         <div className={styles.emptyContainer}></div>
         <div className={styles.emptyContainer}></div>
         <div className={styles.iconContainer}>
            <img src={require(`./../../assets/images/${item.moonImg}`)}></img>
         </div>
         <div className={styles.windSpeedContainer}>${item.wind}</div>
      </div>
   })

   return (
      <div className={styles.weatherPageContainer}>
         {elements}
      </div>
   )
}

export default WeatherPage