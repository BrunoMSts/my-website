import { CardContainer } from "./styles";
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSass,
  SiGit,
  SiPython
} from 'react-icons/si'

type StackCardProps = {
  id: number;
  name: string;
}

export default function StackCard({id, name}: StackCardProps){
  const stacksSvg = [
    <SiHtml5 size={40}/>,
    <SiCss3 size={40}/>,
    <SiJavascript size={40}/>,
    <SiTypescript size={40}/>,
    <SiReact size={40}/>,
    <SiSass size={40}/>,
    <SiGit size={40}/>,
    <SiPython size={40}/>
  ]

  return(
    <CardContainer>
      {stacksSvg[id - 1]}
      <span>{name}</span>
    </CardContainer>
  )
}