import {create} from 'zustand';

export const useWeatherStore = create((set) => ({   
    weather: null,
    setWeather: (weather:any) => set({weather}),
}));