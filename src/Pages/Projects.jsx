import { motion } from 'framer-motion'
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from '@mui/material'
import { useState } from 'react'
import { imageData } from './data.js'

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <>
      <Container sx={{ height: '40vh', display: 'flex', alignItems: 'center' }}>
        <Grid container>
          <Grid item xs={12} md={6} bgcolor="black">
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h2" color="white">
                discover*me
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>

      <Container sx={{ padding: '40px' }}>
        <Grid container spacing={3}>
          {imageData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: { xs: 250, sm: 450, md: 450, lg: 450 },
                  border: '8px solid #004D5C',
                  transition: 'transform 0.3s, border-color 0.3s',
                  transform:
                    hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  borderColor: hoveredIndex === index ? 'transparent' : 'black',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={item.image}
                  alt={`Imagen ${index + 1}`}
                  sx={{
                    objectFit: 'cover',
                  }}
                />

                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '10px',
                    transform:
                      hoveredIndex === index
                        ? 'translateY(0)'
                        : 'translateY(100%)',
                    transition: 'transform 0.3s',
                    boxSizing: 'border-box',
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      textAlign: 'center',
                      fontSize: { xs: '0.6rem', md: '1rem' },
                      textTransform: { xs: 'uppercase', md: 'inherit' },
                    }}
                  >
                    <Typography variant="body">{item.description}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    {item.icons.map((icon, idx) => (
                      <img
                        key={idx}
                        src={icon}
                        alt={icon}
                        style={{ width: '40px', height: '40px', margin: '5px' }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <Button
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    color: 'white',
                    backgroundColor: 'black',
                    '&:hover': {
                      backgroundColor: '#FFA74F',
                    },
                  }}
                  href={item.link}
                  target="_blank"
                >
                  Ver
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
