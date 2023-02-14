import Image from "next/image";
import { Card, CardContent, Typography, Container } from "@mui/material";
import { useGetDataWeatherService } from "@/hooks/useWeather";
import Grid from "@mui/material/Unstable_Grid2";
import jsonDataContentCard from "@/json/contentWeather.json";

function Home(): JSX.Element {
  const { data, isLoading } = useGetDataWeatherService();
  console.log(data);
  const myLoader = ({ src }: any) => {
    return `${data?.current.condition.icon}`;
  };
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
              {jsonDataContentCard.map((item: any, idx: number) => (
                <>
                  {idx === 3 && (
                    <Grid height={2} xs={12}>
                      <div
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(153,153,153,100) 0%, rgba(106,106,106,1) 36%, rgba(0,0,0,100) 100%)",
                          height: 1,
                        }}
                      ></div>
                    </Grid>
                  )}
                  <Grid xs={4}>
                    {item.map((varItem: any) => (
                      <Typography
                        textAlign={"center"}
                        fontFamily={"Montserrat Alternates"}
                        color={varItem.color}
                        variant={varItem.variant}
                      >
                        {varItem.name ||
                          `${data?.current[varItem.variable]} ${
                            varItem.symbol
                          }`}
                      </Typography>
                    ))}
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default Home;
