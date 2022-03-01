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
         <div className={styles.emptyContainer1}><div className={styles.round}>0</div></div>
         <div className={styles.emptyContainer2}><div className={styles.round}>0</div></div>
         <div className={styles.iconContainer}>
            <img src={require(`./../../assets/images/${item.moonImg}`)}></img>
         </div>
         <div className={styles.windSpeedContainer}>
            <span>↗ {item.wind}</span>
         </div>
      </div>
   })
   //<div className={styles.round}>asfsaf</div>
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