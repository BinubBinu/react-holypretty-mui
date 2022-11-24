import React from 'react'
import { Card, CardContent, ImageList, ImageListItem, Box, Typography } from '@mui/material'
const card3 = () => {
  return (
    <Card sx={{ bgcolor: "#eceff1" }}>
      <CardContent sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
            },
            align: "center",
            justifyContent: "center",
            width: "100%",
            alignitems: "center",
          }}
        >
          <ImageList>
            <ImageListItem sx={{ width: 200, height: 200 }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsED2RgSmc2s0gTmrbiK1ZI3n7JhDvpOHhjw&usqp=CAU" alt="images" />
            </ImageListItem>
          </ImageList>
          <Typography
            component="h1"
            sx={{ ml: { xs: 0, sm: 0, md: 10, lg: 10, xl: 10 } }}
          >
            <Typography variant="h4" component="h1">
              Let your timeless beauty bloom
            </Typography>
            <Typography variant="h6">
              Inspire by timeless beauty of blooming petals to create endless
              eye looks. Stable carefully curated palette includes velvety
              mattes , silky shimmers and soft metallic glitters. Wet and dry
              formulas easily blend and build to create cosmetized looks from
              natural luxe to effortless glom.
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default card3