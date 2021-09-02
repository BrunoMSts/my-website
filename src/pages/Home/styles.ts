import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`
//INTRODUCTION STYLES -------------------------------
export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #AEAEAE;
`

//----------------------------------------------------

//PROFILE STYLES ------------------------------------
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  background-color: #AEAE;
  
  @media(max-height: 890px) {
    height: 550px;
  }

  @media(max-width: 900px) {
    height: 750px;
  }

  @media(max-width: 800px) {
    height: 1000px;
  }


`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;
  padding-top: 35px;

  hr.line { 
    width: 850px;
    margin: 1.5rem 0;
  }

  @media (max-width: 900px) {
    hr.line {
      width: 710px;
    }
  }

  @media (max-width: 800px) {
    hr.line {
      width: 330px;
    }
  }
`

export const AboutMe = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 900px) {
    flex-direction: column;
    margin: 0 100px;

    img {
      transform: translateY(-320px) ;
    }

    div.left {
      transform: translateY(230px);
      align-self: flex-start;
    }

    div.right {
      transform: translateY(-305px);
      margin-right: 20px;
      align-self: flex-end;
    }
  }

  @media(max-width: 800px) {
    display: grid;

    div.left {
      align-self: center;
    }

    div.right {
      margin-top: 330px;
    }
  }

`

export const LeftSide = styled.div`
  width: 270px;
`

export const MyPicture = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 1000px;
  justify-self: center;
  margin: 0 4rem 0 2rem;
`

export const RightSide = styled.div`

  display: flex;
  flex-direction: column;
  line-height: 10px;

  .bold {
    font-weight: bold;
  }

  .contacts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 4rem;
    margin: 18px 0;

    a {
      color: #000;
      justify-self: center;


      transition: 0.3s ease-in;
      &:hover {
        color: #FA005B;
        cursor: pointer;
      }
    }
  }
`
//----------------------------------------------------
//ABILITES STYLES ------------------------------------
export const Abilities = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(28,28,28, 0.8);
  width: 100%;
  height: 60vh;
  
  @media(max-height: 850px) {
    height: 550px;
  }

  @media(max-width: 900px) {
    height: 650px;
  }

  @media(max-width: 675px) {
    height: 750px;
  }

  hr.line { 
    width: 850px;
    margin: 1.5rem 0;
  }

  @media (max-width: 900px) {
    hr.line {
      width: 650px;
    }
  }

  @media (max-width: 675px) {
    hr.line {
      width: 435px;
    }
  }

  @media (max-width: 500px) {
    hr.line {
      width: 365px;
    }
  }

  @media (max-width: 498px) {
    hr.line {
      width: 315px;
    }
  }
`

export const StackCardContainer = styled.div`
  display: grid;
  background: rgba(28,28,28, 0.5);
  padding: 1rem;
  border-radius: 15px;
  grid-template-columns: repeat(4, 1fr);
  align-self: center;
  gap: 1rem;

  @media(max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 675px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
//----------------------------------------------------
//PROJECTS STYLES ------------------------------------
export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background: #AAFF12;

  hr.line { 
    width: 850px;
    margin: 1.5rem 0;
  }

  @media(max-height: 850px) {
    height: 450px;
  }

  @media (max-width: 900px) {
    hr.line {
      width: 650px;
    }
  }

  @media (max-width: 675px) {
    hr.line {
      width: 435px;
    }
  }


  @media (max-width: 500px) {
    hr.line {
      width: 398px;
    }

    .header p {
      line-height: 1.3;
      margin: 15px 50px 0;
    }
  }

  @media (max-width: 498px) {
    hr.line {
      width: 328px;
    }
  }
`
//----------------------------------------------------
//CONTATO STYLES -------------------------------------
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 58vh;
  
  hr.line { 
    width: 700px;
    margin: 1.5rem 0;
  }

  @media (max-width: 730px) {
    hr.line {
      width: 365px;
    }
  }

  @media (max-width: 360px) {
    hr.line {
      width: 325px;
    }
  }
  
  @media(max-height: 850px) {
    height: 550px;
  }

`
export const ContactContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 20px;
  background: #aeaeae;

  .infos {
    display: flex;

    input {
      width: 20rem;
      height: 2rem;
      margin-bottom: 20px;
      border-radius: 8px;
      border-style: none;
      font-size: 20px;
  
      ::placeholder {
        padding-left: 5px;
      }
    }
  
    input + input {
      margin-left: 15px;
    }
  }

  textarea {
    resize: none;
    width: 99%;
    height: 8rem;
    border-radius: 10px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;

    ::placeholder {
      padding-left: 5px;
    }
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 15px;
    width: 7.5rem;
    font-size: 18px;

    transition: 0.3s;
    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  @media(max-width: 730px) {
    display: flex;
    flex-direction: column;

    .infos {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input + input {
        margin-left: 0;
      }
    }

    button {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    padding: 10px;

    .infos input {
      font-size: 15px;
    }

    textarea {
      font-size: 15px;
    }
  }
`
//-----------------------------------------------------

