import { Container, Grid, Typography, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { imagesTech, imagesDesign } from './data'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export const About = () => {
  return (
    <>
      <Container
        sx={{
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container md={12}>
          <Grid item xs={12} md={6} bgcolor={'#02020A'}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h2" color="white">
                am*i
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container md={12}>
          <Grid item md={10}>
            <Typography
              variant="body2"
              fontSize={20}
              textAlign={'right'}
              fontFamily={'Monserrat'}
            >
              My name is Micaela, a Frontend Developer with experience in web
              application development, APIs, and web design. My focus on quality
              is reflected in the attention I pay to detail, creativity, and
              user-centered design. I always strive to deliver final products
              that are both aesthetically pleasing and functional.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container md={12}>
          <Grid item xs={12} md={6} bgcolor={'#02020A'}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <Typography variant="h2" color="white">
                stack
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={2} justifyContent="left" pb={10}>
          <Grid item xs={12} md={10}>
            <Accordion>
              <AccordionSummary
                sx={{ bgcolor: '#FFA74F' }}
                expandIcon={<ArrowDownwardIcon sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h4" color="white">
                  development
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Grid
                  container
                  sx={{
                    marginLeft: 0,
                    padding: 2,
                    justifyContent: { xs: 'space-around', md: 'left' },
                  }}
                >
                  {imagesTech.map((image) => (
                    <Grid
                      key={image.id}
                      item
                      sx={{
                        m: '20px',
                        mr: '20px',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    >
                      <Paper
                        elevation={0}
                        style={{
                          width: '60px',
                          height: '60px',
                          backgroundImage: `url(${image.img})`,
                          backgroundSize: 'cover',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transition: 'background-color 0.3s',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={10}>
            <Accordion sx={{ width: '100%' }}>
              <AccordionSummary
                sx={{ bgcolor: '#FFA74F' }}
                expandIcon={<ArrowDownwardIcon sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h4" color="white">
                  design
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Grid
                  container
                  sx={{
                    marginLeft: 0,
                    padding: 2,
                    justifyContent: { xs: 'space-around', md: 'left' },
                  }}
                >
                  {imagesDesign.map((image) => (
                    <Grid
                      key={image.id}
                      item
                      sx={{
                        m: '20px',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    >
                      <Paper
                        elevation={0}
                        style={{
                          width: '60px',
                          height: '60px',
                          paddingLerft: '0px',
                          backgroundImage: `url(${image.img})`,
                          backgroundSize: 'cover',
                          transition: 'background-color 0.3s',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
