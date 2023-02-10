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
  Skeleton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useGetDataWeatherService } from "@/hooks/useWeather";

const inter = Inter({ subsets: ["latin"] });

function Home(): JSX.Element {
  const { data, isLoading } = useGetDataWeatherService();
  console.log(data);
  return (
    <>
      <main>
        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignContent: "center",
            height: "85vh",
          }}
          maxWidth={"lg"}
        >
          <Card
            sx={{
              minWidth: 375,
              bgcolor: "black",
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
              {isLoading ? (
                <Skeleton
                  style={{ background: "gray", marginBottom: "10px" }}
                  variant="circular"
                  width={150}
                  height={150}
                />
              ) : (
                <Image
                  src={ `http:${data?.current.condition.icon}`}
                  alt="Picture of the author"
                  
                  width={150}
                  height={150}
                />
              )}

              {isLoading ? (
                <Skeleton
                  style={{ background: "gray" }}
                  variant="text"
                  sx={{ fontSize: "1rem", width: 200 }}
                />
              ) : (
                <Typography
                  fontFamily={"monospace"}
                  color={"white"}
                  variant={"body1"}
                >
                  {data?.current.condition.text}
                </Typography>
              )}

              {isLoading ? (
                <Skeleton
                  style={{ background: "gray", marginTop: "10px" }}
                  variant="rectangular"
                  sx={{ width: 200, height: 200 }}
                />
              ) : (
                <Typography
                  fontFamily={"monospace"}
                  color={"white"}
                  fontSize={"15vh"}
                >
                  {`${data?.current.temp_c}°C`}
                </Typography>
              )}
            </CardContent>
            <CardActions>
              {isLoading ? (
                <Skeleton
                  style={{ background: "gray" }}
                  variant="rectangular"
                  sx={{ width: 100, height: 30 }}
                />
              ) : (
                <Button size="small">Learn More</Button>
              )}
            </CardActions>
          </Card>
        </Container>
      </main>
    </>
  );
}

export default Home;
