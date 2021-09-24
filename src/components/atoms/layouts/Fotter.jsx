import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconFotter } from '../icon/IconFotter';

export const Fotter = (props) => {
  // const {children} = props;
  return (
    <>
      <SFotter>
        <SLinks>
          <SNav>
            <SUl>
              <SLink to="/">Top</SLink>
              <SLink to="/skill">Skill</SLink>
              <SLink to="/history">History</SLink>
              <SLink to="/personality">Personality</SLink>
              <SLink to="/products">Puroducts</SLink>
            </SUl>
          </SNav>
          <IconFotter></IconFotter>
        </SLinks>
        <SP>&copy; 2021 Chiuney's portfolio</SP>
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
  position: relative;
  z-index: 9999;
`

const SNav = styled.nav`
margin: 0 20px 0 0;
  position:relative;
  ::after {
   content: "";
   display: inline-block;
   width: 1px;
   height: 20px;
   background: #fff;
   position: absolute;
   top: 0px;
   right: -10px;
}
`

const SUl = styled.ul`
`
const SLinks = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  align-items: center;
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
  margin: 10px 0 30px 0;
`