import { links } from '../../data';
import { A, Links, Nav, NavCenter } from './styles';

export default function Navbar() {
  return (
    <Nav>
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