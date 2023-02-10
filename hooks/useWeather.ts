import api from "@/pages/api/weather";
import { useQuery } from "@tanstack/react-query";

async function getDataWeatherService() {
  const {data}:any = await api.get(
    "/forecast.json?key=a231f9df48094e50af940752230802&q=Cali&days=5&aqi=yes&alerts=yes"
  );
    return data;
}

export function useGetDataWeatherService (){
    return useQuery(["weather"] , getDataWeatherService);
}