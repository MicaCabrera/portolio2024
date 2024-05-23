import { Container, Grid, Typography } from '@mui/material'

export const Inicio = () => {
  return (
    <Container
      sx={{
        height: '80vh',
        display: 'flex',
        alignItems: { xs: 'center', lg: 'center' },
      }}
    >
      <Grid container spacing={3} sx={{ paddingTop: { xs: 2, md: 10 } }}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="textPrimary"
            fontFamily="Shadows Into Light"
            fontSize={{ xs: 50, md: 100 }}
            fontWeight={700}
            textAlign="center"
          >
            WHO AM I
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            fontFamily="Shadows Into Light"
            fontSize={{ xs: 16, md: 24, lg: 25 }}
            textAlign="right"
            mt={2}
            sx={{
              mr: { xs: 0, md: 35 },
              textAlign: { xs: 'center', md: 'right', lg: 'right' },
              fontSize: { xs: 20 },
            }}
          >
            2024
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            color="textPrimary"
            fontSize={{ xs: 18, md: 24 }}
            fontFamily="Shadows Into Light"
            textAlign={{ xs: 'center', md: 'left' }}
            mt={{ xs: 2, md: 10 }}
          >
            (web developer)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            color="textPrimary"
            fontFamily="Shadows Into Light"
            fontSize={{ xs: 18, md: 24 }}
            textAlign={{ xs: 'center', md: 'right' }}
            mt={{ xs: 0, md: 10 }}
          >
            Micaela Cabrera
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
