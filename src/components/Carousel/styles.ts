import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  margin: 0 3rem 0 1.2rem;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9.6rem;
    width: 11rem;

  }
  
  .imgContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7rem;
    width: 8.5rem;
    padding: 10px;
    background: #FFFFFF;

    border: 1px solid #FF0000;
    border-radius: 20px;
    transition: 0.35s;

    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }

    a {
      position: absolute;
      width: 100%;
      height: 100%;
      display: none;
    }

    &:hover {
      cursor: pointer;
      height: 8rem;
      width: 9.5rem;
    }
  }
  
  .active {
    height: 8rem;
    width: 9.5rem;
    a {
      display: inline;
    }
  }
  
  @media(max-width: 1750px) {
    margin: 0;
  }

  @media(max-width: 501px) {
    .imgContainer {
      margin: 0;
    }
  }

  @media(max-width: 360px) {
    .imgContainer {
      height: 5rem;
      width: 6rem;

      :hover {
        height: 5.5rem;
        width: 6.5rem;
      }
    }
  }
`


export const Swiper = styled.div`
  display: flex;
  position: absolute;
  bottom: -18px;
  align-self: end;
  justify-self: center;

  span {
    margin-right: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`