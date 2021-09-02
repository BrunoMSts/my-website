import { useState } from 'react';
import { links } from '../../data';
import { A, Links, Nav, NavCenter } from './styles';

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
    <Nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transform: (isScrolling || isMouseOver) ? '' : 'translateX(-150px)', transition: '0.3s'}}>
      <NavCenter>
        <Links>
          {links.map(link => {
            return (<A href={link.url} key={link.id}>{link.text} </A>)
          })}
        </Links>
      </NavCenter>
    </Nav>
  )
}