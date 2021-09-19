import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = (props) => {
  return (
    <>
      <SHeader>
        <SLink to="/">HOME</SLink><br />
        <SLink to="/about">ABOUT</SLink><br />
        <SLink to="/carrer">CARRER</SLink>
      </SHeader>
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