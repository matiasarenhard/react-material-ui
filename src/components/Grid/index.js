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
      <Grid container spacing={1} style={{ display:'flex', justifyContent:'center' }}>
        <Grid item md={4} style={{justifyContent:'center' }}>
          <CardStar />
        </Grid>
        <Grid item md={4} style={{ display:'flex', justifyContent:'center' }}>
          <CardButton />
        </Grid>
        <Grid item md={4} style={{ display:'flex', justifyContent:'center' }}>
          <CardSlider />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={1} style={{ display:'flex', justifyContent:'center' }}>
        <Grid item md={4} style={{ display:'flex', justifyContent:'center' }}>
          <CardBarChart />
        </Grid>
        <Grid item md={4} style={{ display:'flex', justifyContent:'center' }}>
          <CardBardChartNumber />
        </Grid>
        <Grid item md={4} style={{ display:'flex', justifyContent:'center' }}>
          <CardPie />
        </Grid>
      </Grid>
    </>
  );
}
