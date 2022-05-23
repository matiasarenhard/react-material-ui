import * as React from "react";
import Card from "@mui/material/Card";
import styles from "./CardBarChartNumber.module.css";
import CardContent from "@mui/material/CardContent";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data  from "../../../api/barchartnumber.json";

export default function CardButton() {
  const dataChart = data;
  return (
    <>
      <Card sx={{ maxWidth: 800 }} className={styles.body}>
        <CardContent>
              <BarChart
                width={200}
                height={200}
                data={dataChart.data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
        </CardContent> 
      </Card>
    </>
  );
}
