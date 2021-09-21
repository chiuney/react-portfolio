import styled from 'styled-components';
import backgroundPc from './img/background-pc.jpg'
import backgroundDesk from './img/background-desk.jpg'

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
    </SMainContainer>
    </>
  );
}

// MAIN
const SMainContainer = styled.div`
  height: auto;
  background: linear-gradient(#000, #201c09);
`
const SHeaderImg = styled.img`
  /* height: 40vh; */
  width: 100vw;
  background-size:  100%;
  background-repeat: no-repeat;
`

// HEADER
const SContainer = styled.div`
  text-align: center;
  /* margin: 0 0 60px 0; */
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
  margin: 18px 0 0 0;
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