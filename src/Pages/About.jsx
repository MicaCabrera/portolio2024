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
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container md={12}>
          <Grid item md={6} bgcolor={'black'}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h1" color="white">
                am*i
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container md={12}>
          <Grid item md={12}>
            <Typography variant="h5">
              Lived in a Vault-Tec vault all your life? Ready to step outside
              and get some fresh Appalachian air? There’s so much to see and do
              in Fallout 76, and a newcomer might not know where to begin.
              spacer Dont panic. We’ve got all the tools you need to succeed in
              our comprehen{' '}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container md={12}>
          <Grid item md={6} bgcolor={'black'}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <Typography variant="h1" color="white">
                stack
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Accordion sx={{ marginBottom: '20px' }}>
          <AccordionSummary
            sx={{ bgcolor: '#004d53' }}
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h3" color="white">
              development
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Grid container sx={{ marginLeft: 0, padding: 2 }}>
              {imagesTech.map((image) => (
                <Grid
                  key={image.id}
                  item
                  sx={{
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

        <Accordion>
          <AccordionSummary
            sx={{ bgcolor: '#004d53' }}
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h3" color="white">
              design
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Grid container sx={{ marginLeft: 0, padding: 2 }}>
              {imagesDesign.map((image) => (
                <Grid
                  key={image.id}
                  item
                  sx={{
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
      </Container>
    </>
  )
}
