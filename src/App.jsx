import { Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Inicio } from './Pages/Inicio'
import { About } from './Pages/About'
import { Navbar } from './components/Navbar'
import { Projects } from './Pages/Projects'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Grid container justifyContent={'center'} alignItems={'center'}>
        <Grid item md={9}>
          <Navbar />
        </Grid>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </Grid>
        <Footer />
      </Grid>
    </>
  )
}

export default App
