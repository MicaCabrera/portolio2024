import { motion } from 'framer-motion'
import { useState } from 'react'

export const Mode = () => {
  const toggleSwitch = () => setIsOn(!isOn)
  const [isOn, setIsOn] = useState(false)

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }
  return (
    <span className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </span>
  )
}
