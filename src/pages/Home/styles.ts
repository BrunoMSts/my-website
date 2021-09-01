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
  width: 100vw;
  height: 100vh;
  background-color: #AEAEAE;
`

//----------------------------------------------------

//PROFILE STYLES ------------------------------------
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 60vh;
  background-color: #AEAE;

  @media(max-height: 900px) {
    height: 550px;
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;
  padding-top: 35px;
`

export const AboutMe = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftSide = styled.div`
  margin-left: 40px;
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
  width: 100vw;
  height: 60vh;
  @media(max-height: 800px) {
    height: 550px;
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
`
//----------------------------------------------------
export const Projects = styled.div`
  width: 100vw;
  height: 100vh;
`
export const Contact = styled.div`
  width: 100vw;
  height: 100vh;
`


