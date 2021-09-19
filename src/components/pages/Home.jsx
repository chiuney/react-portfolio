import styled from 'styled-components';

export const Home = () => {
  return (
    <>
    <SContainer>
      <SH1>Welcome to Chiuney's Portfolio!</SH1>
      <p>都内のIT企業でフロントエンドエンジニアとして働いています。</p>
      <h3>Skills</h3>
      <ul>
        <SLi>HTML</SLi>
        <SLi>CSS</SLi>
        <SLi>JavaScript</SLi>
        <SLi>jQuery</SLi>
        <SLi>SCSS/Sass</SLi>
      </ul>
      <h3>学習中</h3>
      <ul>
        <SLi>React.js</SLi>
      </ul>

    </SContainer>
    </>
  );
}

const SContainer = styled.div`
  text-align: center;
`
const SH1 = styled.h1`

`
const SLi = styled.li`
  list-style: none;
`