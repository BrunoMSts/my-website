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
  margin: 10rem 0;

  .profileContainer {
    position: absolute;
    background: #AEAEAE;
    margin: 0 auto;
    border-radius: 100px;
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
    border-radius: 100px 20px 20px 100px;
    transform: translateX(-247px);
    
    transition: 0.8s;

    span.projectsText {
      position: absolute;
      left: 0;
      margin-left: 5px;
      font-weight: bold;
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
    padding: 10px 20px 10px 10px;
    border-radius: 20px 100px 100px 20px;
    background: #AEAEAA70;
    transform: translateX(290px);



    span.stackText {
      position: absolute;
      right: 0;
      margin-right: 5px;
      font-weight: bold;
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

  @media (max-width: 1750px) {
    flex-direction: column;
    margin: 18rem 0;

    .carouselContainer {
      padding: 100px 10px 20px;
      border-radius: 0 0 0 50px;
      transform: translateY(360px);
      margin-right: 26rem;

      .carouselHeader {
        margin: 0;
      }

      :hover {
        transform: translate(0, 372px);
      }

      span.projectsText {
        display: none;
      }
    }
    
    .abilitiesContainer {
      position: absolute;
      padding: 125px 10px 10px;
      transform: translateY(334px);
      border-radius: 0 0 50px 0;
      margin-left: 22rem;

      .abilitiesHeader {
        margin: 0;
      }

      :hover {
        transform: translate(0, 348px);
      }

      span.stackText {
        display: none;
      }
    }
  }
  
  @media(max-width: 900px) {
    display: flex;
    flex-direction: column;
    margin-top: 23rem;

    .profileContainer {
      padding: 0;
      height: 43rem;
      width: 45rem;

      img {
        transform: translateY(-180px);
      }

      div.left {
        transform: translateY(360px);
      }

      div.right {
        transform: translateY(-175px);
      }
    }


    .abilitiesContainer {
      margin: 0;
      margin-top: 4.5rem;
      border-radius: 0 0 50px 50px;

    }
    
    .carouselContainer {
      margin: 0;
      margin-top: 46.78rem;
      padding-top: 10px;
      border-radius: 0 0 50px 50px;
    }
  }

  @media(max-width: 700px) {
    .profileContainer {
      height: 61rem;
      width: 38rem;
      margin-top: 16rem;
    }

    div.right {
      margin-right: 3rem;
      transform: translateY(160px) !important;
    }

    .abilitiesContainer {
      margin-top: 38rem;
    }

    .carouselContainer {
      margin-top: 80rem;
    }
  }

  @media(max-width: 500px) {
    .profileContainer {
      width: 25rem;
    }

    .abilitiesContainer {
      margin-top: 57rem;
    }

    .carouselContainer {
      margin-top: 118rem;
    }
  }

  @media(max-width: 360px) {
    .profileContainer {
      width: 22rem;
    }

    .carouselContainer {
      .content {
        width: 8.5rem;
        height: 7rem;
      }
    }
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
    margin: 0.5rem 0;
  }

  @media (max-width: 900px) {
    hr.line {
      width: 600px;
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
    margin: 0 3.5rem;
    max-height: 35rem;

    img {
      transform: translateY(-290px) ;
    }

    div.left {
      transform: translateY(250px);
      align-self: flex-start;
    }

    div.right {
      transform: translateY(-90px);
      align-self: flex-end;
    }


  }

  @media(max-width: 700px) {

    div.left {
      align-self: unset;
      
    }
    div.right {
      align-self: unset;
      transform: translateY(250px);
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
export const StackCardContainer = styled.div`
  display: grid;
  background: rgba(28,28,28, 0.5);
  padding: 0.75rem 3.1rem 0.75rem 4.5rem;
  border-radius: 0 100px 100px 0;
  grid-template-columns: repeat(2, 1fr);
  align-self: center;
  gap: 1rem;

  @media(max-width: 1750px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem 0.8rem;
    padding-top: 4rem;
    margin: 0;
    border-radius: 0 0 50px 50px;
  }

  @media(max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

`
//----------------------------------------------------
//----------------------------------------------------
//CONTATO STYLES -------------------------------------
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  hr.line { 
    width: 700px;
    margin: 1.5rem 0;
  }

  @media (max-width: 1750px) {
    margin-top: 25rem;
  }

  @media(max-width: 900px) {
    margin-top: 48rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 700px) {
    margin-top: 63rem;
    hr.line {
      width: 365px;
    }
  }

  @media(max-width: 500px) {
    margin-top: 83rem;
  }

  @media (max-width: 360px) {
    hr.line {
      width: 325px;
    }
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
    width: 50%;
    padding: 20px;

    .infos {
      display: flex;
      flex-wrap: wrap;

      input {
        width: 100%;
      }

      input:first-child {
        margin-right: 0;
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

