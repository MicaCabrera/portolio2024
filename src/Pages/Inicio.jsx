import { Container, Grid, Typography } from '@mui/material'

export const Inicio = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="black"
            fontFamily="Shadows Into Light"
            fontSize={{ xs: 60, md: 175 }}
            fontWeight={700}
            textAlign="center"
          >
            WHO AM I
          </Typography>
          <Typography
            variant="h6"
            color="black"
            fontFamily="Shadows Into Light"
            fontSize={{ xs: 20, md: 24 }}
            textAlign="right"
            marginRight={15}
          >
            2024
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            color=""
            fontSize={{ xs: 16, md: 30 }}
            fontFamily="Shadows Into Light"
            textAlign={{ xs: 'center', md: 'left' }}
            pt={{ xs: 2, md: 10 }}
          >
            (web developer)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            color=""
            fontFamily="Shadows Into Light"
            textAlign={{ xs: 'center', md: 'right' }}
            fontSize={{ xs: 16, md: 30 }}
            pt={{ xs: 2, md: 10 }}
          >
            Micaela Cabrera
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
