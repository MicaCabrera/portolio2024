import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { Container, IconButton } from '@mui/material'

export const Navbar = () => {
  const [value, setValue] = React.useState('one')
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
  }

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: { xs: 'start', md: 'center' },
        alignItems: 'center',
        width: '100%',
        padding: '10px',
        bgcolor: { xs: 'black', md: 'transparent' },
      }}
    >
      <IconButton
        color="secondary"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2, display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs"
          sx={{
            display: 'flex',
            backgroundColor: 'transparent',
          }}
        >
          <Tab
            component={Link}
            to="/"
            value="one"
            label="home"
            onClick={toggleDrawer(false)}
          />
          <Tab
            component={Link}
            to="/About"
            value="two"
            label="about"
            onClick={toggleDrawer(false)}
          />
          <Tab
            component={Link}
            to="/Projects"
            value="three"
            label="projects"
            onClick={toggleDrawer(false)}
          />
        </Tabs>
      </Drawer>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          indicator: { backgroundColor: '#004d53' },
          textColor: { backgroundColor: '#004d53' },
          display: { xs: 'none', md: 'flex' },
        }}
        aria-label="secondary tabs"
      >
        <Tab component={Link} to="/" value="one" label="home" />
        <Tab component={Link} to="/About" value="two" label="about" />
        <Tab component={Link} to="/Projects" value="three" label="projects" />
      </Tabs>
    </Container>
  )
}
