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
        TabIndicatorProps={{ style: { backgroundColor: '#60C8B3' } }}
        TabProps={{ style: { color: '#60C8B3' } }}
        aria-label="secondary tabs"
      >
        <Tab
          component={Link}
          to="/"
          value="one"
          label="home"
          sx={{
            color: value === 0 ? '#60C8B3' : 'inherit',
            '&.Mui-selected': { color: '#60C8B3' },
          }}
        />
        <Tab
          component={Link}
          to="/About"
          value="two"
          label="about"
          sx={{
            color: value === 0 ? '#60C8B3' : 'inherit',
            '&.Mui-selected': { color: '#60C8B3' },
          }}
        />
        <Tab
          component={Link}
          to="/Projects"
          value="three"
          label="projects"
          sx={{
            color: value === 0 ? '#60C8B3' : 'inherit',
            '&.Mui-selected': { color: '#60C8B3' },
          }}
        />
      </Tabs>
    </Container>
  )
}
