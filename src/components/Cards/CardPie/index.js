import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./CardPie.module.css";
import { PieChart, Pie } from 'recharts';
import data  from "../../../api/piechart.json";

export default function CardButton() {
  return (
    <>
      <Card className={styles.body}>
        <CardContent >
          <PieChart width={200} height={200} margin={0}>
            <Pie data={data.data01} dataKey="value" cx="50%" cy="50%" outerRadius={30} fill="#8884d8" />
            <Pie data={data.data02} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={50} fill="#82ca9d" label />
          </PieChart>
        </CardContent>
      </Card>
    </>
  );
}
