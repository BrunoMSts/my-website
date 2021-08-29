import { Link } from "react-router-dom";

export default function Canvas() {
  return(
    <>
    <h1>Sou o canvas</h1>
    <Link to="/draw"><span>Desenhar</span></Link><br />
    <Link to="/circles"><span>Bolinhas</span></Link>
    </>
  )
}