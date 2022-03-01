let store = {
   _weatherPage: [
      { 
         day: 'Вчера',
         date: '01.03',
         cloudImg: 'rainy-5.svg',
         moonImg: 'cloudy-night-2.svg',
         wind: '3.1 м/с'
      },
      { 
         day: 'Сeгодня',
         date: '02.03',
         cloudImg: 'rainy-5.svg',
         moonImg: 'night.svg',
         wind: '2.9 м/с'
      },
      { 
         day: 'Завтра',
         date: '03.03',
         cloudImg: 'thunder.svg',
         moonImg: 'cloudy-night-2.svg',
         wind: '3.6 м/с'
      },
      { 
         day: 'Чт',
         date: '04.03',
         cloudImg: 'rainy-5.svg',
         moonImg: 'night.svg',
         wind: '3.5 м/с'
      },
      { 
         day: 'Пт',
         date: '05.03',
         cloudImg: 'rainy-5.svg',
         moonImg: 'night.svg',
         wind: '3.3 м/с'
      },
   ],
   getState() {
      return this._weatherPage;
   },
}

export default store;