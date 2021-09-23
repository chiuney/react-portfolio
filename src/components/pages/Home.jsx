import styled from 'styled-components';
import backgroundPc from './img/background-pc.jpg'
import backgroundDesk from './img/background-header.jpg'
// import backgroundPersonality from './img/background-personality.JPG'
import backgroundItalia from './img/background-italia.JPG'
import backgroundWorks from './img/background-works.JPG'
import backgroundHistory from './img/background-history.JPG'

export const Home = () => {
  return (
    <>
      <SContainer>
        <STitleContainer>
          <SH1>Chiuney's Portfolio</SH1>
          <SComment>React.jsのアウトプットとして作成しました。</SComment>
          <SLink>ABOUT ME</SLink>
        </STitleContainer>
      </SContainer>
      <SMainContainer>
        <SHeaderImg src={backgroundDesk}/>
        <SContensContainerFirst>
          <SContentsRight>
            <SComment>History</SComment>
            <SLink>VIEW MORE</SLink>
          </SContentsRight>
        </SContensContainerFirst>
        <SContensContainerEven>
          <SContentsLeft>
            <SComment>Personality</SComment>
            <SLink>VIEW MORE</SLink>
          </SContentsLeft>
        </SContensContainerEven>
        <SContensContainerOdd>
          <SContentsRight>
            <SComment>Products</SComment>
            <SLink>VIEW MORE</SLink>
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
const SContentsLeft = styled.a`
  width: 80%;
  height: 500px;
  max-width: 1000px;
  /* display: block; */
  position: absolute;
  top: 90%;
  left: 25%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 999;
`
const SContentsRight = styled.a`
  width: 80%;
  height: 500px;
  max-width: 1000px;
  /* display: block; */
  position: absolute;
  top: 90%;
  left: 75%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 999;
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
  color: #fff;
  width: fit-content;
  margin: 18px auto 0 auto;
`
const SLink = styled.a`
  display:block;
  margin: 16px auto 0 auto;
  width: fit-content;
  padding: 14px 28px;
  background-color: transparent;
  font-size: 11px;
  color: #fff;
  font-family: "Harmonia Sans",sans-serif;
  font-weight: 400;
  border: 1px solid #fff;
  box-shadow: none;
`