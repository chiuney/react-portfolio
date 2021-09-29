import styled from 'styled-components';
import backgroundDesk from './img/background-header.jpg'
import { HomeHeader } from '../organisms/home/HomeHeader';
import { HomeContact } from '../organisms/home/HomeContact';
import { HomeContents } from '../organisms/home/HomeContents';

const menus = [
  {
    type: "right",
    title:"History",
    url:"/history",
  },
  {
    type: "left",
    title:"Personality",
    url:"/personality",
  },
  {
    type: "right",
    title:"Products",
    url:"/products",
  },
]


export const Home = () => {
  return (
    <>
    {/* タイトルと紹介文 */}
     <HomeHeader></HomeHeader>
     {/* メイン */}
      <SMainContainer>
        <SHeaderImg src={backgroundDesk}/>
        {/* 各ページへのリンクコンテナ */}
        <HomeContents menus={menus}></HomeContents>
        {/* CONTACT */}
        <HomeContact></HomeContact>
      </SMainContainer>
    </>
  );
}

// MAIN
const SMainContainer = styled.div`
`
const SHeaderImg = styled.img`
  height: auto;
  max-height: 500px;
  overflow: hidden;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`