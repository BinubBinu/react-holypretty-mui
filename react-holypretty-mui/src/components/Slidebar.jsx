import React from 'react'
import {
  Card,
  List,
  ListItem,
  
  Box,
  
} from "@mui/material";
const slidebar = () => {
  return (
    <Card sx={{ bgcolor: "#eceff1" }}>
      <Box
        sx={{
          display: "flex",
          align: "center",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",

        }}
      >
       
        <List variant="subtitle1" sx={{ display: "flex", mb: 3, gap: {  sm: 15, md: 15 } , fontSize: {xs: 14 , sm: 22 , md: 22}, fontWeight: {xs: 500, sm: 700 , md: 700} }}>
            <ListItem>YOU</ListItem>
            <ListItem>Wardha</ListItem>
            <ListItem>barcnblis</ListItem>
            <ListItem>DEARDAHLIA</ListItem>
            <ListItem> NYX</ListItem>
          </List>
       
      </Box>
    </Card>
  );
}

export default slidebar
