import React from 'react'
import { Card, Box, CardContent, CardActions, ListItemIcon, List, Typography, ListItem } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";


const Footer = () => {
  return (
    <Card sx={{ bgcolor: "#f73378" }}>
      <CardContent
        align="center"
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
            },
            align: "center",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CardActions sx={{ fontSize: 14 }} color="text.secondary">
            <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
              holypretty
              <br />
              <br />
              Inspired by the timeless beauty of blooming petals to create
              <br />
              endless looks. Looks from natural luxe to effortless glam.
            </Typography>
          </CardActions>

          <CardActions sx={{ fontSize: 14 }} color="text.secondary">
            <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
              About
              <br />
              <List>
                <ListItem>Meet Us</ListItem>
                <ListItem>Career</ListItem>
                <ListItem>Address</ListItem>
              </List>
            </Typography>
          </CardActions>

          <CardActions sx={{ fontSize: 14 }} color="text.secondary">
            <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
              Customer's Help 
              <br />
              <List>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Terms &#38; Condition</ListItem>
                <ListItem>Conduct Us</ListItem>
                <ListItem>FAQs</ListItem>
              </List>
            </Typography>
          </CardActions>

          <CardActions sx={{ fontSize: 14 }} color="text.secondary">
            <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
              OUR MOBILE APP
              <br />
              Download holypretty app available on IOS and android
              <br />
              <br />
              <br />
              FOLLOW US
              <br />
              <br />
              <ListItemIcon>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
              </ListItemIcon>
            </Typography>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Footer