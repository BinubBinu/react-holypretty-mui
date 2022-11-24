import React from 'react'
import { Card, Box, Rating, CardContent, ImageList, ImageListItem, Typography } from '@mui/material'
const Card5 = () => {
  return (
    <Card sx={{ bgcolor: "#fff" }}>
      <CardContent>
        <Typography
          sx={{ flex: 2, mb: 10 }}
          color="text.secondary"
          variant="h4"
          component="h1"
          align="center"
        >
          This Is What They Say
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
                sm: "row",
                md: "row",
                lg: "row",
              },
            }}
          >
            <ImageListItem sx={{ width: 250, height: 250 }}>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <Typography component="h6">
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ mb: { xs: 5, sm: 5 } }}
                >
                  The lip product i have brought is very good. It keeps my lip
                  moisturized all day long, it don't darken my lips, and the
                  color is beautiful, make my face look bright.
                </Typography>
              </Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: 250,
                height: 250,
                ml: { xs: 0, sm: 20, md: 20, lg: 20 },
              }}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEX///9cnqA5PD3btJFEkZvMpIPq5dw7Ozvg29PguJRYnJ/iupXQp4UyNTdPmJo3ODnasYwrMDTFnX42i5ZKlJwzODtYUEomKivTrIrKoH0lLDI+jpktNTlTmZ7r6OB4aFofJCW5mn7m2cuiiHGGc2JDQT9MR0OZgWze6uvJysq4ubnr6+tkZme/wMCtrq5vYVXlyrLE2dqlwb2Xv8BHSUqFh4een6Dx8fFfYWLe3t5kWU+skHaLdmTavqfdvJ7n3M6xzs91rK6HtLrP19DT4uSWuLZyqK/t8/RUV1h6fHyQkZIXHB6jo6SXin+ohmr89O3ax7bRsZe4x8OgIq2gAAAO4UlEQVR4nOWde0PazBLGCxgQSIzhEiKiAblpa0WKrRVoBWqh9byn7ev3/zBn9hLYhGwIGLJJz/NHqUpwf5nZZ2Y3SfvmTSh6d3Xz/PP6x91dMnl39+Pzx+e3V+/C+c0h6OHm5w+lXtEURU1SqYqiVerKj49vY495//YnwK3Q7FKVyn/uPj2IHuTuur+5rlQUd7gVpVZPfroXPdSd9P66XuHEzimt/hw7xodnZWP0WCmVG9FD3koP1/Vt8LAqn+NjOleft+dDYay/FT1yf3r4XPc5+9ZU/yh68D70bof8XKlyLXr8G/XPVvayLuWHaAJvPdxVXsWHEO9EQ3jp084TMCZRvH51AAniZ9EgHL27e90MXKkSTUe98tug+VAk6+L7emB8CDF6q423gQIm1cgZ6s1/AgWEtcazaCS7gk1RrGjl6UPQEQSpUaqK98ngXHSlyj9XD1FZFF8HVQft0ir1+vV70XBIN8F0Mq5SKnfi5+O7PQKC1PqVaMI95ehKohGvgi8UTlXEbt/82IeP2iV2ORVCCCGIIvcZ9z4LseriAN+FEUIojZ+EEX7SQiFMKsII7/bvM1gVUUvikJJUYB/+dr/9DKO6oJr4MRQnRdIEFYwQyj2VKmiHMbQQQpoKWSs+hGU0oIqQ/vt9aEYDFVFI0f8npHqPpAq57BaelSYFtTWfQ7PSpKBVYoh8gqxmD9ukLiq38YuImh9OV1ozGzX0qgi45PYQRrHQWnKBEAow06v9E5ZrTVmSMaGI5cX+Vxa1TkOWJJlMRAHl4mbfBb9qSgAoyTr+qh4+4Z63MGqdEeIDwl4ZE4ZfEJ/32dKUa2OZAEpyixCGfwVjj01budYrUD4g7GKrqfxFhOVqr7HkA8ImIQy/qdkTYa1sFhg+IBz9TYTlWrsr2fhApKmphH+1NHDCci1pjoi/yAZDSJoaAXumwXppuZYxRxLlS6VSbBCxlwq4PvNM62E7qdXKr4Ir12r6uCHT8oD47IS4qRGwuKAVv9zKN7q9TrJW24ETwSX1lhU8kJFKOQnljqAY0q6t1s2mstljqdEc9/SyBpx+QMuIDeDMbkOSl3hyaimWELdtAuYh7bxroywZkwEjlQujbqun44iioK6JfD/Z1nvjJmZbGaeRYsUSDtE5E+CldPVUa2SXwzIMGY9algqNUbM7Hps90HCo60N4NU2zNe42R40CfRMDYcdzEOLGVEA9pBvCWsMxNsPqJ3myVzvZWKNDYpsaUxDhPSGsSm4DhHAazsrtFIdtnRC33iLu5SNZWvUYpsVKBfGjf9twiINwjAkFbCeS/dJqdvNwd5DBEqKmph4+IG3bqnlrUNml8nnyuhUTPZQef8zUELx8ErHpTcpFLY8HlzKwe7bAOZFrtsA1Rw3IxvxmUHIupMYIDm+Z6API8b+I6ZLlk5AL3dRM81mp2Rq2NU1T7ILvaBkofKOCweFE4YIzAy1RRls/Hj6grZvNhoGWT8pPAYRkW79tqugR5kwmo6IREXXa7YxCxqyi1zb0Lgbknp3OgHYvQ8kQodrugMgntOlnwk/aQ5jw2n9FEP6EiQiDyGApVXNkwAwiyiKvgOiYQ6WqKaqKOHV4Q96aqcbI7Gj0J1VliDocsNj8UqlCs6fRj4aXZO3XRfiAv3/VkhlLmmnk1xIRGQewjHUFDRaxqL0WUk9F3CjsANcg3I5jYQoWepr18cmydBI+4a2xItSaeSeeLR9HOh2simcYDY42xFF1PYrUCQtR1eWT8IN4nDfLdABKlw9IKPMNNeOQmmmsh92SQdsZhby31pUlI2zA38epxjKLvPkw4+rN1mmRvOoILYb0vNQKUvhpenGcyutkAGrPR3HPjxU7YNfzIGvlhH+DOoTyf5IOmfD2GOJSJYMd+2lfDGsqUkLvd1vrCpVMc0QY9kQEwlR2WEYD3hAOS21cNDN6Bjtrx/sYaTUR4d2ogzv5EzLhVxyXahsy1R9htqNmtJ4E1ir1FL+EkNqqjnwGCL+IIMx3a5B8PmOoZJQW8dy8qfjMUoih0iiTL4QQprI9sBtf8xCZqbIsKlpGa/hxGlNRdQmHMPwYonmI49FSFHNDOcSEY3ifBZU1FX9e2lOVFl1GhT4PLcLsSFOHfqqFrq7CBgFVdc/TQgnhoF8WYdheekEJwW02uQZ5G/RqzJcbygVd48vtjGat9UOvh+cWYbatapsBIdSrJMVpqo08zou1i6GpHWutf/I7ZMI3S8KeqrlvuNkIeyrrLSi3vTohSgjJbC43pcIGpGYKg+0qSnNjmkJRUW0rYO96QTtv+OiuRRi2la4mInINc+NmDIy1xb4JLFjzOC+GZaXayErSx9AJfy+txu4h7oQdZypLnm5KsxRatqXRhA64StP8UPV0jRT1GTtPvqd4FH1yqbSp4VWFkHqPlLbStLmpuKXyEELnTrdnEJfVsGkRhu6kSFYQU9BSewYx29W0tW2A7Fjjz0QawkxbZAhXMxGCmMl4XIzISori0vZkdUUxOIgIsEAXhuJCyHRuQ2iQU7x45Buq0nY7AYaqZBruiQqAUkdVeqI6tqW+Wn6qw6q2mXXbWcqmWpqScY1VVlIVbex6ZmS5q6qKLgnNURtitlVVtHarQa7KWASgRgsodE4yZg1dU9RWg931R/vFqUYroyhaS+wkpLo4PqbxMFW0Q6+b3RHavzbwnjfetW97bKbmm+iKR6bHHtQaKmir37q77UQSlqJU6WU6jtBeNlLVEozUHHlefUJH2Q5BB1XVYde6u80Ie0nhottlD57NSygEQ73T7uj60Bw3C7w9bYYRUrk5Noc6Pmpotroj5g4UsRlKtVwpWnMPXZlBf2ymWx2Vp0eRS6vSUuJclNHv480I24m5xi2qENoVOCF7G4doOKyvm8e8nRjAKExDx0QMljAS0zD4iRi5afjmTbCAbJKGftGQo9tgg8iEMOxdYJ7OAyVkk/RcNJqlIAFtd0CLBlsq0DSNYJIG66ZMuY+KkyIFWPSZHP1XNBajx8CCyPpMNMo9VWCETAhFbALzFZTXsCGMjs8gBeU1kQ1hUEFkQxiNZcVKwQSRDWGESgVREEFkQ3grGmhNQQQxwrMQ6fUL4egaKVWQIZRFw7gq/cogsjkagX1gN73ObKJtM1RBhTCaOYr0Gj+NdClcaXc/jeyawqmdp2KE2zWHvu6GyORoVHYQuXotYHRdxtLvHQDZSzERdhlL2yMa8QJEiNvNxdgBvtnWblYuGnmTWWmbohGbMmGXf0ImRUUPehv98U3INmuR7mXsukeAPv5hAftlmEiu6zn6gkO4GdGQ7ISxmYjWHr8hbwUY3YWvU/erSSh5Mbr82yAnUflPnryVZq5EGQXusxgWVYFFPBQ9eD9Kp9NsxZcLkuvtsxTPxicdHkYf8T6ddiCmEIbhg+/EOESKeKISwHT6i60gygVgYaakjOkc8Tv595Aoyv999eKcAqbPL+ztt0GJ8G2yBSKHy/w5XCqqYbxf8iFERxgtSIvOMNwDGF3GRX86Tdt0/ri2xDBkCeerwcxFwndhBzyc5yYL0UisLifTo6Pc0fe0k/HWa6lIEU/W+dLfi6fF4tnkUjQY1uVklgO8BOjoQ9rJmP7z9ZgLaSA848/hmj4UD0AAeTAXS7noDxJHlC7hjpg+R5CpYxdM+J7xrwueBXhAKYtng74AzMv+YJpj4SiiM1FpJB8vbr9AMBl9/XJ78Xh+7sIHKXpgF8LMDcKL5uWERM5Jh5WbuiHiWEI0Hx8vkB4fyZdYa4RzJyChRJil2eRpvwaEIne0HjkbYuIbh5Evlu+ldOoGyCbtbE/RBEfZAOeZqT4h1zKUgxm0AxFL8UFHw/iyAyPSS8kHoEVZmvUDylio5f7paBin26dqOv1tepQ7K/lEJJTzyev5nmbb4uEwbs+I+OjB/jER5NOr+CaJHfAoY2K9OPL1wfmLfGOeFks7B3IxODraDW8ZSH8T8mXKOY8+MYvFwU4zcrBr+FjG3PSDd7p++wCdg2f58UMJjFvz9V8Xv9UAofOZfn9xw/z28n3K6xy2piwe9LcDnAbDZ1ECZmI6+/4B9IL++D6bovLjh24JuZFxvgXf0+sT1B10pV2O3xDI01PftjoJMoCBakMgixN/gIPIAiY2MfoznEgDJjYw+kGMOmDCm3FzovajDwie44W4wW4u4wAI8rDVond/M91HmdiH+Jl66lkXo1sn1sRHLHp0N4v4AHr6DZ9wEJccxeIievhpnEKY8LKbv2AWEm09E2NjpJZ4dZFnp7HyGSJennJqYizaGYe285p4OSkRx085aSp6tDuJNxPdAOPSktrFmYmu/XfsagUWx05d14mxqxVEnCzNuRDGMoT8NF0HfIopIS9N1ydiPKdhgpemLhMxptOQl6YuFVH0QHcWbxHlBIxhU0rFm4jO1jSOTSkVh9C5goqt0fAm4prVzOJqNLyJeDr7W4yGOxFLDsL4Jil3Iv4tVprgTkS7mcZz6UTFIbTfNRXjYsGzGke5+BsJJ39LOeSZqYMwjrtQK7kSOgpijAt+gkdoX13Edu2E5WqmTkIfnwPpXiqd7XQrTHDKnZ2VAMg+CD+Evj58eTCAnoUMSsks+SB0tG1+xrtuWZh0r6g5B5k7Iadc2Aj9FAv+HRClYFFzhMvrJq+tCX21pV73eNhYEe3WuIgKYfm7cdYXIduY+mpL/RA6cTEvQaZ37Fl/oT8o+YbyIOSUfLYx9bVZujXhHuWL8On/itBX4x1dQvemxra4mPi5ZTZmhKe2vajFhDyK5skZG0L0FNip2+NRi/4APSzJ5YwwoeXG6JGoYnHu/ezXJXCip+/W8zbKhPjhveLZ3P/DmJf9CX4Qjw1oJAnRYwBHRyUI207PeS2e+pPZNEdJo0VI0BLTQT+Ahy4XOKKJI8iDU6/nH8MQScdibjqYBIG2Djqbl/BvCJ2Ukh3M54B2uedn9RdPT5PB7Kx0Sln3B3tKuU5LZzMUs9Af6V6geTqwwhoQrkWFHmyeA9f+I+ZPi0sI7GQwmM/PSgcs8KkHNP1xcfV+WIpAGuJwRQKLpwUE96nfh/gOZiCgJgu/1SqphLYHEvM5/HSAwtRHSIv9QP0PhCteUdn8KtwAAAAASUVORK5CYII="
                alt=""
              />
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
              <Typography
                variant="h6"
                component="h6"
                sx={{ mb: { xs: 5, sm: 5 } }}
              >
                The lip product i have brought is very good. It keeps my lip
                moisturized all day long, it don't darken my lips, and the color
                is beautiful, make my face look bright.
              </Typography>
            </ImageListItem>
          </ImageList>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Card5