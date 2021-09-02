import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  height: 140px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin-right: 10px;

    background-color: #da34f3;
    border-radius: 20px;

    transition: 0.35s;

    &:hover {
      cursor: pointer;
    }
  }
  
  .active {
    height: 140px;
  }
  
  @media(max-width: 500px) {
    .content {
      margin: 0 auto;
    }
  }
`


export const Swiper = styled.div`
  display: flex;
  position: absolute;
  bottom: -30px;
  margin: 0 180px;

  span {
    margin-right: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`