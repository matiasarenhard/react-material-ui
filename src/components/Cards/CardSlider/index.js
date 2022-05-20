import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slider from '@mui/material/Slider';
import LinearProgress from '@mui/material/LinearProgress';

function valuetext(value) {
  return `${value}°C`;
}

export default function CardStar() {
  return (
    <>
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={10}
            max={110}
            disabled
          />
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            color="secondary"
          />
          <LinearProgress color="secondary" />
          <br />
          <LinearProgress color="success" />
          <br />
          <LinearProgress color="inherit" />
        </CardContent>
      </Card>
    </>
  );
}
