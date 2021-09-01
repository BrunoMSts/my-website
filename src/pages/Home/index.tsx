import { Link } from "react-router-dom";
import { 
  Main, 
  Introduction, 
  Profile, 
  Abilities, 
  Projects,
  Contact, 
  AboutMe,
  LeftSide,
  RightSide,
  MyPicture,
  Header,
  StackCardContainer
} from "./styles";

import { stacks } from '../../utils/stacks';

import { FaGithubAlt, FaHeart } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'

import Navbar from "../../components/Navbar";
import StackCard from "../../components/StackCard";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <>
      <h1>NADA AQUI AINDA, CURIOSO</h1>
      <span style={{color: 'red'}}>AS CORES SERVEM MERAMENTE PARA SABER O FINAL DE CADA DE SECTION, SITE EM DESENVOLVIMENTO</span><br />      <Link to="/canvas">Mentira, tem esse link aq</Link>
      <Navbar />
      <Main>
        <section>
          <Introduction id="introduction">
            <h1>Made with <FaHeart/> by Bruno</h1>
            <h2>Fullstack Developer</h2>
            <span>WORKING HARD TO MAKE THE INTERNET AWESOME</span>
          </Introduction>
        </section>
        <section>
          <Profile id="profile">
            <Header>
              <h1>Perfil</h1>
              <p>Always in constanting learning. 🌱</p>
              <hr style={{width: "825px", margin: "1.5rem 0"}}/>
            </Header>
            <AboutMe>
              <LeftSide>
                <h1>About me</h1>
                <p style={{fontSize: "15px"}}>
                  Hi there 👋<br />
                  So where do i start? 
                  First of all, my name is Bruno and i am a person that
                  who like to build some web applications, despite my 
                  focus is centered on web, i am a enthusiast when it's 
                  about Information security🔒.<br/> 
                  In my free times, i like to play video games and sometimes 
                  read a book or hangout with my friends.
                  You can chat with me about everything, let's find out the secrets of the universe. 💬
                </p>
              </LeftSide>
              <MyPicture src="https://avatars.githubusercontent.com/u/49536304?v=4" alt="eu" />
              <RightSide>
                <div className="details">
                <h1>Details</h1>
                <span className="bold">Nome: </span><p>Bruno</p>
                <span className="bold">Idade: </span><p>21</p>
                <span className="bold">Localização: </span><p>Em algum lugar no pálido ponto azul</p>
                </div>
                <div className="contacts">
                  <a href="https://www.github.com/BrunoMSts" aria-label="github" title="Github"><FaGithubAlt size={30}/></a>
                  <a href="" aria-label="linkedin" title="Linkedin"><AiOutlineLinkedin size={30}/></a>
                  <a href="" aria-label="gmail" title="Gmail"><SiGmail size={30}/></a>
                </div>
              </RightSide>
            </AboutMe>
          </Profile>
        </section>
        <section>
         <Abilities id="abilities">
           <Header>
              <h1>Habilidades</h1>
              <p>breve descrição</p>
              <hr style={{width: "825px", margin: "2.5rem 0"}}/>
           </Header>
           <StackCardContainer>
            {stacks.map(stack => (
              <StackCard key={stack.id} id={stack.id} name={stack.name}/>
            ))}
           </StackCardContainer>
        </Abilities>
        </section>
        <section>
         <Projects id="projects">Projetos</Projects>
        </section>
        <section>
          <Contact id="contact">Contato</Contact>
        </section>
      </Main>
    </>
  )
} 
