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

  .img {
    position: absolute;
    width: 100%;
    height: 100%;

    opacity: 0.2;
  }
`

//----------------------------------------------------

//PROFILE STYLES ------------------------------------
export const Profile = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;

  .profileContainer {
    position: absolute;
    background: #AEAEAE;
    margin: 0 auto;
    border-radius: 20px;
    padding: 2rem;
    z-index: 1;
  }

  .carouselContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: #AEAEAA70;
    padding: 10px 10px 20px 30px;
    border-radius: 20px;
    transform: translateX(-247px);
    
    transition: 0.8s;

    .carouselHeader {
      margin-right: 5rem;
      line-height: 0;
    }


    span.projectsText {
      position: absolute;
      left: 0;
      margin-left: 8px;

      transition: 0.8s;
    }

    :hover {
      transform: translateX(-650px);

      span.projectsText {
        opacity: 0;
      }
    }
  }

  .abilitiesContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 30px 10px 10px;
    border-radius: 20px;
    background: #AEAEAA70;
    transform: translateX(283px);

    .abilitiesHeader {
      margin-left: 5rem;
      line-height: 0;
    }

    span.stackText {
      position: absolute;
      right: 0;
      margin-right: 8px;

      transition: 0.8s;
    }

    transition: 0.8s;
    :hover {
      transform: translateX(600px);

      span.stackText {
        opacity: 0;
      }
    }
  }

  @media (max-width: 1700px) {
    flex-direction: column;
    margin-bottom: 500px;

    .carouselContainer {
      padding: 10px 10px 20px;
      transform: translateY(450px);
      margin-left: 30rem;

      .carouselHeader {
        margin: 0;
      }

      :hover {
        transform: translate(0, 472px);
      }

      span.projectsText {
        display: none;
      }
    }
    
    .abilitiesContainer {
      position: absolute;
      padding: 10px;
      transform: translateY(440px);
      right: 0;
      margin-right: 28rem;

      .abilitiesHeader {
        margin: 0;
      }

      :hover {
        transform: translate(0, 462px);
      }

      span.stackText {
        display: none;
      }
    }
  }
  
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
export const StackCardContainer = styled.div`
  display: grid;
  background: rgba(28,28,28, 0.5);
  padding: 0.75rem;
  margin-left: 5rem;
  border-radius: 15px;
  grid-template-columns: repeat(2, 1fr);
  align-self: center;
  gap: 1rem;

  @media(max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
  }

  @media(max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 675px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;

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
      transform: translateY(-300px) ;
    }

    div.left {
      transform: translateY(230px);
      align-self: flex-start;
    }

    div.right {
      transform: translateY(-272px);
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
  padding: 20px 10px 20px 20px;
  border-radius: 20px;
  background: #aeaeae;

  .infos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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

    input:first-child {
      margin-right: 15px;
    }
  }


  textarea {
    resize: none;
    width: 97%;
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

