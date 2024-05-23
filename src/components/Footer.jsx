import { Avatar, SpeedDial, SpeedDialAction, Stack } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'
import logo from '../assets/logoPompeya.png'
import { useState } from 'react'

const actions = [
  {
    icon: <LinkedInIcon fontSize="large" color="primary" />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/micacabreradev/',
  },
  {
    icon: <GitHubIcon fontSize="large" sx={{ color: 'black' }} />,
    name: 'GitHub',
    url: 'https://github.com/MicaCabrera',
  },
  {
    icon: <MailIcon fontSize="large" sx={{ color: 'black' }} />,
    name: 'Mail',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=micabeacabrera@gmail.com',
  },
]

const footerStyles = {
  marginTop: '100px',
  padding: '20px',
  position: 'relative',
}

export const Footer = () => {
  const [open, setOpen] = useState(false)

  const handleMouseEnter = () => {
    setOpen(true)
  }

  const handleMouseLeave = () => {
    setOpen(false)
  }

  const handleActionClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <footer style={footerStyles}>
      <Stack
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
      >
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{
            '& .MuiSpeedDial-fab': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
            '& .MuiSpeedDialAction-fab': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            },
          }}
          icon={<Avatar alt="Logo" src={logo} sx={{ width: 90, height: 90 }} />}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleActionClick(action.url)}
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            />
          ))}
        </SpeedDial>
      </Stack>
    </footer>
  )
}
