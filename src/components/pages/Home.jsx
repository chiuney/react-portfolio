import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from 'react-router-dom';
import backgroundPc from './img/background-pc.jpg'
import backgroundDesk from './img/background-header.jpg'
import backgroundItalia from './img/background-italia.JPG'
import backgroundWorks from './img/background-works.JPG'
import backgroundHistory from './img/background-history.JPG'
import backgroundContact from './img/background-contact.JPG'
import { LinkButton } from '../atoms/button/LinkButton';

export const Home = () => {
  return (
    <>
      <SContainer>
        <STitleContainer>
          <SH1>Chiuney's Portfolio</SH1>
          <SContent>埼玉県出身のWebエンジニア。早稲田大学を卒業後、ホテルの運営会社で現場での接客業務やレベニューマネジメント*業務に携わる。退職を機に独学でプログラミングの勉強を開始し、2021年3月にIT業界へ転職。フロントエンドエンジニアとして既存システムの改修や機能拡張、新規開発に携わっています。</SContent>
          <SComment>*各店舗の需要予測と利益の最大化を目的とした施策</SComment>
          <LinkButton url="/skill">SKILL</LinkButton>
        </STitleContainer>
      </SContainer>
      <SMainContainer>
        <SHeaderImg src={backgroundDesk}/>
        <SContensContainerHistory>
          <SContentsRight>
            <SContentTitle>History</SContentTitle>
            <LinkButton url="/history">VIEW MORE</LinkButton>
          </SContentsRight>
        </SContensContainerHistory>
        <SContensContainerPersonality>
          <SContentsLeft>
            <SContentTitle>Personality</SContentTitle>
            <LinkButton url="/personality">VIEW MORE</LinkButton>
          </SContentsLeft>
        </SContensContainerPersonality>
        <SContensContainerProducts>
          <SContentsRight>
            <SContentTitle>Products</SContentTitle>
            <LinkButton url="/products">VIEW MORE</LinkButton>
          </SContentsRight>
        </SContensContainerProducts>
        <SContact>
          <SContactContainer>
            <STitle>CONTACT</STitle>
            <SContacrContent>ご連絡の際はこちら。何かございましたらお気軽にご連絡ください。フリーランスではございませんので、お仕事のご依頼はお引き受けできかねます。</SContacrContent>
            <LinkButton url="/contact">CONTACT</LinkButton>
          </SContactContainer>
        </SContact>
      </SMainContainer>
    </>
  );
}

const SContacrContent = styled.div`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;

  max-width: 500px;
`

const SContactContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  align-items: center;
  flex-direction: column;
`

const SContact = styled.div`
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  background-image: url(${backgroundContact});
  background-size:  cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  align-items: center;
`
const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  font-size: 24px;
  letter-spacing: .08em;
  width: 200px;
  color: #fff;
  position: relative;
  z-index: 9999;
  text-align: center;
  margin: 0 0 30px 0;
`

const SContentsContainerProto = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 60vh;
  max-height: 500px;
  position: relative;
  background-size:  cover;
  background-repeat: no-repeat;
`

const SContensContainerHistory = styled(SContentsContainerProto)`
  margin: -80px auto 0 auto;
  background-image: url(${backgroundWorks});
`

const SContensContainerPersonality = styled(SContentsContainerProto)`
  margin: 0 auto;
  background-image: url(${backgroundItalia});
`
const SContensContainerProducts = styled(SContentsContainerProto)`
  margin: 0 auto;
  background-image: url(${backgroundHistory});
`

// CONTENTS
const SContents = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.lessThan("small")`
    width: 100%;
  `}
`
const SContentsLeft = styled(SContents)`
`
const SContentsRight = styled(SContents)`
  margin: 0 0 0 auto;
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
  width: 100%;
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
  margin: 0 auto;
  width: fit-content;
  max-width: 500px;
  font-size: 10px;
  letter-spacing: .05em;
  line-height: 24px;
`

const SContent = styled.p`
  margin: 30px auto 0 auto;
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  width: 90%;
  max-width: 500px;
`