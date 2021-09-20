import React, { useState } from 'react';
import styled from "styled-components";
import { ModalImage } from "../organisms/personality/ModalImg";
import words from './img/101.png'

export const Personality = () => {
  const [showImg, setShowImg] = useState(false);
  return (
    <>
      <SContainer>
        <SH1>presonality</SH1>
        <SContentContainer>
          <SContent>自己分析の一環として「自分を構成する101個のワード」を考えました。</SContent>
          <ModalImage showImg={showImg} setShowImg={setShowImg} words={words} ></ModalImage>
          <SImg src={words} alt="101ワード" onClick={() => setShowImg(true)} />
          <ul>
            <SLink>- note: <a href='https://note.com/sakikura/n/n652068a6e9bd' target='_blank' rel="noreferrer">『自分を構成する101個のワード』</a></SLink>
          </ul>
        </SContentContainer>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  text-align: center;
  margin: 0 0 60px 0;
`
const SH1 = styled.h1`
  font-size: 3.56rem;
  font-weight: 500;
  line-height: 110%;
  margin: 5rem 0 1.424rem 0;
`
const SContentContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`
const SContent = styled.p`
  margin: 0 auto 2rem;
  font-size: 15px;
  /* text-align: left; */
`
const SLink = styled.li`
  width: fit-content;
  list-style: none;
  text-align: center;
  margin: 0 auto;
`
const SImg = styled.img`
  width: 70%;
  height: auto;
  cursor: pointer;
`