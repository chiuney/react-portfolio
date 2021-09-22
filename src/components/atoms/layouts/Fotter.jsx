// import { BrowserRouter, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Router } from '../../router/Router';

export const Fotter = (props) => {
  // const {children} = props;
  return (
    <>
      <SFotter>
        <SNav>
          <SUl>
            <SLink to="/">Top</SLink>
            <SLink to="/about">About</SLink>
            <SLink to="/carrer">History</SLink>
            <SLink to="/personality">Personality</SLink>
         </SUl>
        </SNav>
        <SP>&copy; 2021 React Inc.</SP>
      </SFotter>
    </>
  );
}

const SFotter = styled.footer`
  height: 100px;
  width: 100%;
  background: #201c09;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const SNav = styled.nav`
  margin: 40px 0 0 0;
`

const SUl = styled.ul`
`

const SLink = styled(Link)`
  font-family: 'Noto Serif',serif;
  font-size: 13px;
  letter-spacing: .08em;
  color: #fff;
  padding: 20px 25px;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
`

const SP = styled.p`
  font-family: 'Noto Serif',serif;
  font-size: 10px;
  letter-spacing: .08em;
  color: #fff;
  margin: 30px 0 30px 0;
`