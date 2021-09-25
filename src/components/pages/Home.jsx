import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundPc from './img/background-pc.jpg'
import backgroundDesk from './img/background-header.jpg'
import backgroundItalia from './img/background-italia.JPG'
import backgroundWorks from './img/background-works.JPG'
import backgroundHistory from './img/background-history.JPG'

export const Home = () => {
  return (
    <>
      <SContainer>
        <STitleContainer>
          <SH1>Chiuney's Portfolio</SH1>
          <SContent>埼玉県出身のWebエンジニア。早稲田大学を卒業後、ホテルの運営会社で現場での接客業務やレベニューマネジメント*業務に携わる。退職を機に独学でプログラミングの勉強を開始し、2021年3月にIT業界へ転職。フロントエンドエンジニアとして既存システムの改修や機能拡張、新規開発に携わっています。</SContent>
          <SComment>*各店舗の需要予測と利益の最大化を目的とした施策</SComment>
          <SLink to="/skill">SKILL</SLink>
        </STitleContainer>
      </SContainer>
      <SMainContainer>
        <SHeaderImg src={backgroundDesk}/>
        <SContensContainerFirst>
          <SContentsRight>
            <SContentTitle>History</SContentTitle>
            <SLink to="/history">VIEW MORE</SLink>
          </SContentsRight>
        </SContensContainerFirst>
        <SContensContainerEven>
          <SContentsLeft>
            <SContentTitle>Personality</SContentTitle>
            <SLink to="/personality">VIEW MORE</SLink>
          </SContentsLeft>
        </SContensContainerEven>
        <SContensContainerOdd>
          <SContentsRight>
            <SContentTitle>Products</SContentTitle>
            <SLink to="/products">VIEW MORE</SLink>
          </SContentsRight>
        </SContensContainerOdd>
      </SMainContainer>
    </>
  );
}

const SContentsContainerProto = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 60vh;
  max-height: 500px;
  position: relative;
  background-size:  cover;
  background-repeat: no-repeat;
`

const SContensContainerFirst = styled(SContentsContainerProto)`
  margin: -80px auto 0 auto;
  background-image: url(${backgroundWorks});
`

const SContensContainerEven = styled(SContentsContainerProto)`
  margin: 0 auto;
  background-image: url(${backgroundItalia});
  background-size:  cover;
  background-repeat: no-repeat;
`
const SContensContainerOdd = styled(SContentsContainerProto)`
  margin: 0 auto;
  background-image: url(${backgroundHistory});
`

// CONTENTS
const SContentsLeft = styled.div`
  width: 80%;
  height: 500px;
  max-width: 1000px;
  position: absolute;
  top: 90%;
  left: 25%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 999;
`
const SContentsRight = styled.div`
  width: 80%;
  height: 500px;
  max-width: 1000px;
  position: absolute;
  top: 90%;
  left: 75%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 999;
`
const SContentTitle = styled.p`
  width: fit-content;
  margin: 18px auto 0 auto;
`

// MAIN
const SMainContainer = styled.div`
  background: linear-gradient(#000, #201c09);
`
const SHeaderImg = styled.img`
  height: auto;
  max-height: 500px;
  overflow: hidden;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`

// HEADER
const SContainer = styled.div`
  text-align: center;
  height: 80vh;
  background-image: url(${backgroundPc});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
`
const STitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`
const SH1 = styled.h1`
  font-family: 'Noto Serif',serif;
  font-weight: 400;
  font-size: 34px;
  letter-spacing: .08em;
  color: #fff;
`
const SComment = styled.p`
  width: fit-content;
  font-size: 10px;
  letter-spacing: .05em;
  line-height: 24px;
  width: 500px;
`
const SLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display:block;
  margin: 16px auto 0 auto;
  width: fit-content;
  padding: 14px 28px;
  background-color: transparent;
  font-size: 11px;
  font-family: "Harmonia Sans",sans-serif;
  font-weight: 400;
  border: 1px solid #fff;
  box-shadow: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #fff;
    opacity: .6;
    color: #000;
  }
`
const SContent = styled.p`
  margin: 30px 0 0 0;
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  width: 500px;
`