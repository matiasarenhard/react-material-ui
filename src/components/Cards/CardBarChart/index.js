import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BarChart, Bar } from 'recharts';
import styles from "./CardBarChart.module.css";
import data  from "../../../api/barchart.json";

export default function CardButton() {
  const dataChart = data;
  return (
    <>
      <Card className={styles.body}>
        <CardContent>
          <BarChart width={200} height={200} data={dataChart.data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </CardContent>
      </Card>
    </>
  );
}
