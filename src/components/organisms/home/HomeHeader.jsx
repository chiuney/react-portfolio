import React from 'react';
import styled from "styled-components";
import backgroundPc from '../../pages/img/background-pc.jpg'
import { LinkButton } from '../../atoms/button/LinkButton';

export const HomeHeader = () => {

  return (
    <>
      <SContainer>
        <Stitle>Chiuney's Portfolio</Stitle>
        <SContent>埼玉県出身のWebエンジニア。早稲田大学を卒業後、ホテルの運営会社で現場での接客業務やレベニューマネジメント*業務に携わる。退職を機に独学でプログラミングの勉強を開始し、2021年3月にIT業界へ転職。フロントエンドエンジニアとして既存システムの改修や機能拡張、新規開発に携わっています。</SContent>
        <SComment>*各店舗の需要予測と利益の最大化を目的とした施策</SComment>
        <LinkButton url="/skill">SKILL</LinkButton>
      </SContainer>
    </>
  );
}


// HEADER
const SContainer = styled.div`
  text-align: center;
  height: 80vh;
  min-height: 500px;
  background-image: url(${backgroundPc});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Stitle = styled.h1`
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