import React from 'react';
import { useEffect, useState } from "react";
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
  StackCardContainer,
  ContactContainer
} from "./styles";

import { stacks } from '../../utils/stacks';

import { FaGithubAlt, FaHeart } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiGmail } from "react-icons/si";

import Navbar from "../../components/Navbar";
import StackCard from "../../components/StackCard";
import Carousel from "../../components/Carousel";

import Rengoku from '../../assets/rengoku.png'
import Circles from "../Canvas/Circles";

export default function Home() {

  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      setIsScroll(true)
    }

    setInterval(() => {
      setIsScroll(false)
    }, 2000)
  }, [])

  return (
    <>
      <h1>NADA AQUI AINDA, CURIOSO</h1>
      <span style={{color: 'red'}}>AS CORES SERVEM MERAMENTE PARA SABER O FINAL DE CADA DE SECTION, SITE EM DESENVOLVIMENTO</span><br />      <Link to="/canvas">Mentira, tem esse link aq</Link>
      <Navbar isScrolling={isScroll}/>
      <Main>
        <section style={{position: 'relative'}}>
          <Circles />
          <Introduction id="introduction">
            <div className="wrapper"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#ff001185",
                opacity: 0.2,
              }}
            >
              <div className="img" style={{
                background: `url(${Rengoku}) center center / cover no-repeat`
              }} />
            </div>
            <h1>Made with <FaHeart color="red"/> by Bruno</h1>
            <h2>Fullstack Developer</h2>
            <span>WORKING HARD TO MAKE THE INTERNET AWESOME</span>
          </Introduction>
        </section>
        <section>
          <Profile id="profile">
            <Header>
              <h1>Perfil</h1>
              <p>Always in constanting learning. 🌱</p>
              <hr className="line"/>
            </Header>
            <AboutMe>
              <LeftSide className="left">
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
              <RightSide className="right">
                <div className="details">
                  <h1>Details</h1>
                  <span className="bold">Nome: </span><p>Bruno</p>
                  <span className="bold">Idade: </span><p>21</p>
                  <span className="bold">Localização: </span><p>Em algum lugar no pálido ponto azul</p>
                </div>
                <div className="contacts">
                  <a href="https://www.github.com/BrunoMSts" title="Github"><FaGithubAlt size={30}/></a>
                  <a href="https://www.google.com" title="Linkedin"><AiOutlineLinkedin size={30}/></a>
                  <a href="https://www.google.com"><SiGmail size={30} title="Gmail"/></a>
                </div>
              </RightSide>
            </AboutMe>
          </Profile>
        </section>
        <section>
         <Abilities id="abilities">
           <Header>
              <h1>Habilidades</h1>
              <p>Tecnologias que mais uso atualmente 🔥</p>
              <hr className="line"/>
           </Header>
           <StackCardContainer>
            {stacks.map(stack => (
              <StackCard key={stack.id} id={stack.id} name={stack.name}/>
            ))}
           </StackCardContainer>
        </Abilities>
        </section>
        <section>
         <Projects id="projects">
          <Header className="header">
              <h1>Projetos</h1>
              <p>Projetos que desenvolvi ao longo da minha jornada como dev 👨‍💻</p>
              <hr className="line"/>
          </Header>
          <Carousel />
         </Projects>
        </section>
        <section>
          <Contact id="contact">
            <Header>
                <h1>Contato</h1>
                <p>Entre em contato comigo 🤗</p>
                <hr className="line"/>
            </Header>
            <ContactContainer>
              <div className="infos">
                <input type="nome" placeholder="Nome"/>
                <input type="email" placeholder="E-mail"/>
              </div>
              <textarea name="mensagem" id="" placeholder="Escreva sua mensagem"></textarea>
              <button type="submit">Enviar</button>
            </ContactContainer>
          </Contact>
        </section>
      </Main>
    </>
  )
} 
