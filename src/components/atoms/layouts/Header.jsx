import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Qiita from '../../pages/icon/Qiita-logo.png'

export const Header = (props) => {
  const [ showMenu, setShowMenu ] = useState(false);
  const onClickHumburger = () => {
    showMenu === true ? setShowMenu(false) : setShowMenu(true);
  }
  return (
    <>
      <SHeader>
        <SIcons>
          <SIconLink><a href='https://twitter.com/chiuney6_'target='_blank' rel="noreferrer"><i class="fab fa-twitter gold fa-lg"></i></a></SIconLink>
          <SIconLink><a href='https://github.com/chiuney'target='_blank' rel="noreferrer"><i class="fab fa-github gold fa-lg"></i></a></SIconLink>
          {/* <SIconLink> */}
            <SQiita href='https://qiita.com/chiuney'target='_blank' rel="noreferrer">
            </SQiita>
          {/* </SIconLink> */}
        </SIcons>
        {showMenu ? (
          <SNav>
            <SUl>
              <SLink to="/">Top</SLink>
              <SLink to="/about">About</SLink>
              <SLink to="/carrer">History</SLink>
              <SLink to="/personality">Personality</SLink>
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
const SQiita = styled.a`
  width: 40px;
  height: 40px;
  margin: 0 0 0 12px;
  mask: no-repeat center/70%;
  -webkit-mask: no-repeat center/70%;
  background: #bea76f;
  display: inline-block;
  mask-image: url(${Qiita});
`
const SIcons = styled.ul`
  margin: 0 auto 0 0;
  display: flex;
`

const SIconLink = styled.li`
  list-style: none;
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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