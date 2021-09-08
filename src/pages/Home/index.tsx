import { FormEvent } from 'react';
import { useEffect, useState } from "react";
import { 
  Main, 
  Introduction, 
  Profile, 
  Contact, 
  AboutMe,
  LeftSide,
  RightSide,
  MyPicture,
  Header,
  StackCardContainer,
  ContactContainer
} from "./styles";
import emailjs from 'emailjs-com';

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

  function handleSendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    emailjs.sendForm('service_qyypiem', 'template_iqbfqem', e.currentTarget, 'user_jznd66ZwddNOwO0qDxDHq')
      .then(() => {
        alert("Email enviado!")
      }, () => {
        alert("Ocorreu um erro, tente novamente!")
      });
    e.currentTarget.reset();
  }

  return (
    <>
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
            <div className="profileContainer">
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
                  about Cyber Security🔒.<br/> 
                  In my free times, i like to play video games and sometimes 
                  read a book or hangout with my friends.
                  You can chat with me about everything, let's find out the secrets of the universe. 💬
                </p>
              </LeftSide>
              <MyPicture src="https://avatars.githubusercontent.com/u/49536304?v=4" alt="eu" />
              <RightSide className="right">
                <div className="details">
                  <h1>Details</h1>
                  <span className="bold">Name: </span><p>Bruno</p>
                  <span className="bold">Age: </span><p>21</p>
                  <span className="bold">Location: </span><p>Somewhere in the pale blue dot..</p>
                </div>
                <div className="contacts">
                  <a href="https://www.github.com/BrunoMSts" title="Github"><FaGithubAlt size={30}/></a>
                  <a href="https://www.google.com" title="Linkedin"><AiOutlineLinkedin size={30}/></a>
                  <a href="https://www.google.com"><SiGmail size={30} title="Gmail"/></a>
                </div>
              </RightSide>
            </AboutMe>
            </div>
            <div className="abilitiesContainer">
              <span className="stackText">
                S<br/>
                T<br/>
                A<br/>
                C<br/>
                K<br/>
                S
              </span>
              <StackCardContainer>
                {stacks.map(stack => (
                  <StackCard key={stack.id} id={stack.id} name={stack.name}/>
                ))}
              </StackCardContainer>
            </div>
            <div className="carouselContainer">
              <span className="projectsText">
                P<br/>
                R<br/>
                O<br/>
                J<br/>
                E<br/>
                C<br/>
                T<br/>
                S<br/>
              </span>
              <Carousel />
            </div>
            
          </Profile>
        </section>
        <section>
          <Contact id="contact">
            <Header>
                <h1>Contact me 🤗</h1>
                <hr className="line"/>
            </Header>
            <ContactContainer>
              <form onSubmit={handleSendEmail}>
                <div className="infos">
                  <input name="name" type="text" placeholder="Name" />
                  <input name="email" type="email" placeholder="E-mail"/>
                  <input name="subject" type="text" placeholder="Subject" style={{width: "195%"}}/>
                </div>
                <textarea name="mensagem" id="" placeholder="Your message here..." ></textarea>
                <button type="submit">Send</button>
              </form>
            </ContactContainer>
          </Contact>
        </section>
      </Main>
    </>
  )
} 
