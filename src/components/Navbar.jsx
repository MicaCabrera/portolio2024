import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Container } from '@mui/system'

export const Navbar = () => {
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: '20px',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        style={{
          indicator: { backgroundColor: '#00FF00' },
          textColor: { color: '#00FF00' },
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
