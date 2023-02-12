import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Skeleton,
  styled,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useGetDataWeatherService } from "@/hooks/useWeather";
import Grid from "@mui/material/Unstable_Grid2";

function Home(): JSX.Element {
  const { data, isLoading } = useGetDataWeatherService();
  console.log(data);
  const myLoader=({src}:any)=>{
    return `${data?.current.condition.icon}`;
  }
  return (
    <>
      <main>
        <Container
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            display: "grid",
            alignContent: "center",
            height: "85vh",
          }}
          maxWidth={"lg"}
        >
          <Card
            sx={{
              minWidth: 375,
              bgcolor: "black",
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              display: "grid",
              justifyItems: "center",
            }}
          >
            <CardContent
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "grid",
                justifyItems: "center",
              }}
            >
              <Image
              loading="lazy"
                loader={myLoader}
                src={`${data?.current.condition.icon}`}
                alt="Picture of the author"
                width={150}
                height={150}
                unoptimized 
              />
              <Typography
                fontFamily={"Montserrat Alternates"}
                color={"white"}
                variant={"body2"}
              >
                {data?.current.condition.text}
              </Typography>
              <Typography
                fontFamily={"Montserrat Alternates"}
                color={"white"}
                variant={"h3"}
              >
                {`${data?.current.temp_c}°C`}
              </Typography>
            </CardContent>
          </Card>
          <Container maxWidth="sm">
            <Grid container spacing={4}>
              <Grid xs={4}>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"gray"}
                  variant={"body2"}
                >
                  Humidity
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"white"}
                  variant={"h5"}
                >
                  {`${data?.current.humidity} %`}
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"gray"}
                  variant={"body2"}
                >
                  Wind now
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"white"}
                  variant={"h5"}
                >
                  {`${data?.current.wind_kph} Km`}
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"gray"}
                  variant={"body2"}
                >
                  Preciptation
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"white"}
                  variant={"h5"}
                >
                  {`${data?.current.precip_mm} mm`}
                </Typography>
              </Grid>
              <Grid  xs={12} height={2}>
              <div  style={{background:'linear-gradient(90deg, rgba(153,153,153,100) 0%, rgba(106,106,106,1) 36%, rgba(0,0,0,100) 100%)' , height:1}}></div>
              </Grid>
              <Grid xs={4}>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"gray"}
                  variant={"body2"}
                >
                  Pressure
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"white"}
                  variant={"h5"}
                >
                  {`${data?.current.pressure_mb}`}
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"gray"}
                  variant={"body2"}
                >
                  Visibility
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"white"}
                  variant={"h5"}
                >
                  {`${data?.current.vis_km} km`}
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"gray"}
                  variant={"body2"}
                >
                  UV
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontFamily={"Montserrat Alternates"}
                  color={"white"}
                  variant={"h5"}
                >
                  {`${data?.current.uv}`}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default Home;
