import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = (props) => {
  return (
    <>
      <SHeader>
        <SLink to="/">Top</SLink><br />
        <SLink to="/about">About</SLink><br />
        <SLink to="/carrer">History</SLink>
        <SLink to="/personality">Personality</SLink>
      </SHeader>
    </>
  );
}

const SHeader = styled.header`
  height: 60px;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SLink = styled(Link)`
  color: #bea76f;
  margin: 8px;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
`