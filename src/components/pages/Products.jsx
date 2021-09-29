import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';
import backgroundPc from './img/background-pc.jpg'

const products = [
  {
    url: "/",
    title: "Portfolio",
    comment: "Reactのアウトプットとして作成しました。",
    skills: "HTML5, CSS3, JavaScript, React, styled-components",
    other: "Atomic Design, レスポンシブ対応",
  },
  {
    url: "#",
    title: "Comming soon...",
    comment: "Comming soon...",
  },
]

export const Products = () => {
  return (
    <>
    <SContainer>
      <STitle>Product List</STitle>
      <SProducts>
        {
          React.Children.toArray(products.map((e,i) => {
            return(
              <>
                <SProduct>
                  <SImg src={backgroundPc} alt="{e.title}" />
                  <SProductTitle>{e.title}</SProductTitle>
                  <SMask to={e.url}>
                      { e.skills ?
                        (
                          <SMaskText>
                            <SProductComment>{e.comment}</SProductComment>
                            <SProductComment>使用技術：{e.skills}</SProductComment>
                            <SProductComment>その他：{e.other}</SProductComment>
                          </SMaskText>
                        ):(
                          <SMakingComment>{e.comment}</SMakingComment>
                        )
                      }
                  </SMask>
                </SProduct>
              </>
            );
          }))
        }
      </SProducts>
    </SContainer>
    </>
  );
}

const SMaskText = styled.div`
  padding: 0 0 20px 0;
`

const SMask = styled(Link)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* background-color:	rgba(0,0,0,0.4); */
    color: #fff;
    text-decoration: none;

    display: flex;
    align-items: center;

  ${media.greaterThan("large")`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color:	rgba(0,0,0,0.4);
    color: #fff;
    text-decoration: none;

    display: flex;
    align-items: flex-end;

    &:hover {
      opacity: .5;
    }
  `}
`
const SContainer = styled.div`
  min-height: 100vh;
  padding: 20px 0 0 0;
`
const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  text-align: center;
  font-size: 24px;
  letter-spacing: .08em;
`
const SProducts = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  justify-content: center;
`
const SProduct = styled.div`
  margin: 0 20px 70px;
  max-width: 400px;
  position:		relative;
`
const SProductTitle = styled.h3`
  font-family: 'Noto Serif',serif;
  font-size: 18px;
  line-height: 1.25;
  letter-spacing: .08em;
  text-align: center;
  margin: 10px 0 0 0;
`
const SProductComment = styled.p`
  width: 90%;
  margin: 5px auto 0 auto;
  font-family: "Noto Serif",serif;
  font-style: normal;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
`
const SMakingComment = styled.p`
  width: 100%;
  height: 100%;
  font-family: "Noto Serif",serif;
  font-style: normal;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SImg = styled.img`
  width: 100%;
  height: 100%;
  transition: .2s;
  &:hover {
    cursor: pointer;
  }
`
