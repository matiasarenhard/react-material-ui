import * as React from "react";
import Grid from "@mui/material/Grid";
import CardStar from "../../components/Cards/CardStar";
import CardButton from "../../components/Cards/CardButton";
import CardSlider from "../../components/Cards/CardSlider";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardPie from "../../components/Cards/CardPie";
import CardBardChartNumber from "../../components/Cards/CardBarChartNumber";

export default function CustomGrid() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={4}>
          <CardStar />
        </Grid>
        <Grid item md={4}>
          <CardButton />
        </Grid>
        <Grid item md={4}>
          <CardSlider />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={1}>
        <Grid item md={4}>
          <CardBarChart />
        </Grid>
        <Grid item md={4}>
          <CardBardChartNumber />
        </Grid>
        <Grid item md={4}>
          <CardPie />
        </Grid>
      </Grid>
    </>
  );
}
