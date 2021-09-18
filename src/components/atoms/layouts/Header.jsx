import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Router } from '../../router/router';

export const Header = () => {
  return (
    <>
      <SHeader>HEADER</SHeader>
      <BrowserRouter>
        <Link to="/">HOME</Link><br />
        <Link to="/about">ABOUT</Link><br />
        <Link to="/carrer">CARRER</Link>
        {/* <Router /> */}
      </BrowserRouter>
    </>
  );
}

const SHeader = styled.div`
  height: 30px;
  width: 100%;
  background: red;
`