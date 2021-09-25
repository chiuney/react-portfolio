import React from 'react';
import styled from 'styled-components';
import backgroundPc from './img/background-pc.jpg'

const products = [
  {
    title: "Portfolio",
    comment: "このサイトです。",
    skills: "HTML5"
  },
  {
    title: "Comming soon...",
    comment: "制作中",
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
                  <SProductComment>{e.comment}</SProductComment>
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
// モーダルで
// 左側拡大写真
// 右側データ => 使用技術とか、簡単なreadme的なものをかけると良い
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
  :last-child {
    pointer-events: none;
  }
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
  margin: 5px 0 0 0;
  font-family: "Noto Serif",serif;
  font-style: normal;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 400;
  text-align: center;
`
const SImg = styled.img`
  width: 100%;
  height: 100%;
  transition: .2s;
  &:hover {
    opacity: .5;
    cursor: pointer;
  }
`
