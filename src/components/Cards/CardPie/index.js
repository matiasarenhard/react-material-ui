import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./CardPie.module.css";
import { PieChart, Pie } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

export default function CardButton() {
  return (
    <>
      <Card className={styles.body}>
        <CardContent >
          <PieChart width={200} height={200} margin={0}>
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={30} fill="#8884d8" />
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={50} fill="#82ca9d" label />
          </PieChart>
        </CardContent>
      </Card>
    </>
  );
}
