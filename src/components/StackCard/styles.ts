import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  position: relative;
  padding: 1.25rem 2.5rem;
  background-color: #aeaeae;

  border-radius: 15px;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1rem;
    opacity: 0;
    background: linear-gradient(rgba(42,255,0, 0.7) 0%, rgba(144,144,144, 0.8) 100%);
    text-transform: uppercase;
    transition: opacity 0.4s ease-in;
  }

  &:hover span {
    opacity: 1;
    cursor: default;
  };
  
  @media(max-width: 498px) {
    padding: 2rem 3rem;

  }
`
