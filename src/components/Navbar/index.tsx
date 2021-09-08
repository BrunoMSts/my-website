import { useState } from 'react';
import { A, Links, Nav, NavCenter } from './styles';
import { FiAperture } from 'react-icons/fi'
import { RiProfileLine, RiMailSendLine } from 'react-icons/ri'

type NavbarProps = {
  isScrolling: boolean;
}

export default function Navbar({isScrolling}: NavbarProps) {

  const [isMouseOver, setIsMouseOver] = useState(false)
  
  function handleMouseEnter() {
    setIsMouseOver(true)
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
  }

  return (
    <Nav 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      style={{
        transform: (isScrolling || isMouseOver) ? '' : 'translateX(145px)', transition: '0.3s'
      }}
    >
      <NavCenter>
        <Links>
          <A href="#introduction" ><FiAperture size={24} />Introduction</A>
          <A href="#profile" ><RiProfileLine size={24} />Profile</A>
          <A href="#contact" ><RiMailSendLine size={24} />Contact</A>
        </Links>
      </NavCenter>
    </Nav>
  )
}