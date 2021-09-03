import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  height: 140px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  
  .imgContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 315px;
    height: 10rem;
    margin: 0 15px 20px;
    padding: 8px;

    border: 1px solid #aeaeae;
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
    }
  }
  
  .active {
    height: 12rem;
    a {
      display: inline;
    }
  }
  
  @media(max-width: 501px) {
    .imgContainer {
      margin: 0;
    }
  }
`


export const Swiper = styled.div`
  display: flex;
  position: absolute;
  margin-top: 230px;

  span {
    margin-right: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`