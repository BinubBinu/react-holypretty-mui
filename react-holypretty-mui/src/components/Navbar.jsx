import React from 'react'

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


const Navbar = () => {
    return (
      <div>
        <Card sx={{ bgcolor: "#f73378" }}>
          <CardContent>
            <CardActions sx={{ fontSize: 14 }} color="#fff">
              <Typography sx={{}} color="#fff">
                holypretty
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  align: "center",
                  justifyContent: { xs: "center", sm: "space-between" },
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    justifyContent: {
                      xs: "center",
                      sm: "space-between",
                      md: "space-around",
                    },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    align: "center",
                  }}
                >
                  <List
                    align="right"
                    direction="column"
                    sx={{
                      mb: 8,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      align: "center",
                    }}
                    color="text.secondary"
                  >
                    <ListItem>
                      <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText> Shop</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>NewsFeed</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>Experiance</ListItemText>
                    </ListItem>
                    <ListItemIcon>
                      <SearchIcon sx={{ mr: 2, ml: 8 }} />
                      <AccountCircleIcon sx={{ mr: 2 }} />
                      <ShoppingBagIcon sx={{ mr: 2 }} />
                    </ListItemIcon>
                  </List>
                </Typography>
              </Box>
            </CardActions>
            <Typography variant="h4" component="h1" color="#fff">
              More Than MakeUps, We Create Beauty in Joy
              <br /> &#38; Give The Best Magic Beauty.
            </Typography>

            <Typography color="#fff">
              EveryThing is There For Your Beauty Needs
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              sx={{ bgcolor: "#efefef", color: "#000" }}
            >
              Shop Now
            </Button>
          </CardActions>
        </Card>
      </div>
    );
}

export default Navbar