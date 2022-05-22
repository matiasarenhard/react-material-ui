import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import styles from "./CardSlider.module.css";

export default function CardStar() {
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      <Card className={styles.body}>
        <CardContent >
          <List subheader={<ListSubheader>Settings</ListSubheader>}>
            <ListItem >
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
              <Switch
                edge="end"
                onChange={handleToggle('wifi')}
                checked={checked.indexOf('wifi') !== -1}
                inputProps={{
                  'aria-labelledby': 'switch-list-label-wifi',
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BluetoothIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
              <Switch
                edge="end"
                onChange={handleToggle('bluetooth')}
                checked={checked.indexOf('bluetooth') !== -1}
                inputProps={{
                  'aria-labelledby': 'switch-list-label-bluetooth',
                }}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
}
