import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconHeader } from '../icon/IconHeader';

export const Header = (props) => {
  const [ showMenu, setShowMenu ] = useState(false);
  const onClickHumburger = () => {
    showMenu === true ? setShowMenu(false) : setShowMenu(true);
  }
  return (
    <>
      <SHeader>
        <IconHeader></IconHeader>
        <SLogo to="/"><SLogoTitle>Chiuney's<br/>Portfolio</SLogoTitle></SLogo>
        {showMenu ? (
          <SNav>
            <SUl>
              <SLink to="/" onClick={() => setShowMenu(false)}>Top</SLink>
              <SLink to="/skill" onClick={() => setShowMenu(false)}>Skill</SLink>
              <SLink to="/history" onClick={() => setShowMenu(false)}>History</SLink>
              <SLink to="/personality" onClick={() => setShowMenu(false)}>Personality</SLink>
              <SLink to="/products" onClick={() => setShowMenu(false)}>Puroducts</SLink>
              <SLink to="/contact" onClick={() => setShowMenu(false)}>Contact</SLink>
            </SUl>
          </SNav>
        ) : (
        <></>
        )}
        <SHamburger onClick={onClickHumburger}>
          <SLine1></SLine1>
          <SLine2></SLine2>
          <SLine3></SLine3>
        </SHamburger>
      </SHeader>
    </>
  );
}
const SLogoTitle = styled.h1`
  margin: 0 auto;
  color: #bea76f;
  line-height: 1;
  font-family: cursive;
  font-weight: 400;
`
const SLogo = styled(Link)`
  position: absolute;
  text-decoration: none;
`
const SNav = styled.nav`
  height: 66px;
  position: absolute;
  top: 90px;
  width: 100%;
  background: #000;
`

const SUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SLink = styled(Link)`
  color: #bea76f;
  padding: 20px 25px;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
`

const SHamburger = styled.div`
  display: block;
  position: absolute;
  right: 20px;
  width: 17px;
  height: 44px;
  cursor: pointer;
  transition: 1s;
`

const SLines = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  width: 25px;
  height: 3px;
  background: #bea76f;
  transition: 1s;
  border-radius: 4px;
`
// ハンバーガー
const SLine1 = styled(SLines)`
  top: 35%;
`
const SLine2 = styled(SLines)`
`
const SLine3 = styled(SLines)`
  top: 65%;
`

const SHeader = styled.header`
  height: 90px;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`


// ${media.lessThan("medium")`
// /* screen width is less than 768px (medium) */
// `}

// ${media.between("medium", "large")`
// /* screen width is between 768px (medium) and 1170px (large) */
// `}

// ${media.greaterThan("large")`
// /* screen width is greater than 1170px (large) */
// `}