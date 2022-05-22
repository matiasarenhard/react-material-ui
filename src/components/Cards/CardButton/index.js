import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import styles from "./CardButton.module.css";
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CardButton() {
  return (
    <>
      <Card className={styles.body} >
        <CardContent>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <br/><br/>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} defaultChecked color="secondary" />
          <Checkbox {...label} defaultChecked color="success" />
          <Checkbox {...label} defaultChecked color="default" />
          <br/><br/>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <Item><Fab color="primary" aria-label="add" size="small">
            <AddIcon />
          </Fab></Item>
            <Item><Fab color="secondary" aria-label="edit" size="small">
            <EditIcon />
          </Fab></Item>
            <Item><Fab disabled aria-label="like" size="small">
            <FavoriteIcon />
          </Fab></Item>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
