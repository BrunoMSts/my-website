import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 160px;
  margin-top: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
`

export const NavCenter = styled.div`
  background-color: #F43e50;
  border-radius: 20px;
  width: 100%;
  padding-right: 40px;
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
`
export const A = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 20px 20px 10px;
  border-radius: 20px;
  margin: 5px 8px;
  font-weight: bold;
  color: #FFF;
  line-height: 0;

  svg {
    margin-right: 10px;
  }
  
  transition: 0.3s;
  :hover {
    background: #FFF;
    color: #F43e50;
  }
`
