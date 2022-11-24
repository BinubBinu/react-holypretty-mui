import React from 'react'
import {
  Card,
  Box,
  
  CardContent,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
const Card6 = () => {
  return (
    <Card sx={{ bgcolor: "#fff" }}>
      <CardContent>
        <Typography
          sx={{ mb: 10 }}
          color="text.secondary"
          variant="h4"
          component="h1"
          align="center"
        >
          Holypretty's Values
        </Typography>
        <Box
          sx={{
            display: "flex",

            align: "center",
            justifyContent: "center",
            width: "100%",
            alignitems: "center",
          }}
        >
          <ImageList
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
            }}
          >
            <ImageListItem sx={{ width: 150, height: 150, mr: 2 }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioApc9Qz5vntm9diddwrm2c4Y2Y8LkdnSaQ&usqp=CAU"
                alt=""
              />
              <Typography component="h6" sx={{ mb: { xs: 5, sm: 5 } }}>
                We only add natural and Technological incridents that have been
                certified by laboratory.
              </Typography>
            </ImageListItem>
            <ImageListItem sx={{ width: 150, height: 150, mr: 2 }}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <Typography component="h6" sx={{ mb: { xs: 5, sm: 5 } }}>
                Based on the stringent global cosmetics and EWGs safety
                incredients .
              </Typography>
            </ImageListItem>
            <ImageListItem sx={{ width: 150, height: 150 }}>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <Typography component="h6" sx={{ mb: { xs: 5, sm: 5 } }}>
                Based on the stringent global cosmetics and EWGs safety
                incredients .
              </Typography>
            </ImageListItem>
          </ImageList>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Card6