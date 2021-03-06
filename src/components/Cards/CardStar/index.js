import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import styles from "./CardStar.module.css";

export default function CardStar() {
  return (
    <>
      <Card className={styles.body}>
        <CardContent>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </Stack>
          <br /><br />
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
            <CircularProgress color="error" />
          </Stack>
          <br />
          <Chip avatar={<Avatar>M</Avatar>} label="Matias"  />
          <Chip avatar={<Avatar>A</Avatar>} label="Admin" color="primary"  />
        </CardContent>
      </Card>
    </>
  );
}
