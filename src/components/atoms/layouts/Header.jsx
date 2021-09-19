import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Router } from '../../router/Router';

export const Header = (props) => {
  // const {children} = props;
  return (
    <>
      <SHeader>
        <SLink to="/">HOME</SLink><br />
        <SLink to="/about">ABOUT</SLink><br />
        <SLink to="/carrer">CARRER</SLink>
        {/* <Router></Router> */}
      </SHeader>
      {/* {children} */}
    </>
  );
}

const SHeader = styled.header`
  height: 60px;
  width: 100%;
  background: #11999e;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SLink = styled(Link)`
  color: #fff;
  margin: 8px;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
`