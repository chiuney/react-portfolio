import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Router } from '../../router/Router';

export const Fotter = (props) => {
  // const {children} = props;
  return (
    <>
      <SFotter>
        &copy; 2021 React Inc.
      </SFotter>
    </>
  );
}

const SFotter = styled.footer`
  height: 60px;
  width: 100%;
  background: #201c09;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  color: #fff;
`