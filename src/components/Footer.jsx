import {
  Avatar,
  SpeedDial,
  SpeedDialAction,
  Stack,
  useMediaQuery,
} from '@mui/material'
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
  position: 'relative',
}

export const Footer = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:600px)')
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
        sx={{
          position: 'fixed',
          bottom: 16,
          [isMobile ? 'left' : 'right']: 16,
          zIndex: 1000,
        }}
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
                backgroundColor: 'transparent',
              },
            },
          }}
          icon={<Avatar alt="Logo" src={logo} sx={{ width: 80, height: 80 }} />}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleActionClick(action.url)}
            />
          ))}
        </SpeedDial>
      </Stack>
    </footer>
  )
}
