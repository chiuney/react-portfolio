import styled from "styled-components";

export const About = () => {
  return (
    <SContainer>
      <SH1>ABOUT ME</SH1>
      <SContentContainer>
        <SContent>埼玉県出身のWebエンジニア。早稲田大学を卒業後、ホテルの運営会社で現場での接客業務やレベニューマネジメント業務に携わりました。退職を機に独学でプログラミングの勉強を開始し、2021年3月にIT業界へ転職。フロントエンドエンジニアとして、既存システムの改修や機能拡張、新規開発に携わる。</SContent>
        <ul>
          <SLi>- Github: <a href='https://github.com/chiuney'>https://github.com/chiuney</a></SLi>
          <SLi>- Blog: <a href='https://qiita.com/chiuney'>https://qiita.com/chiuney</a></SLi>
          <SLi>- Twitter: <a href='https://twitter.com/chiuney6_'>https://twitter.com/chiuney6_</a></SLi>
        </ul>
      </SContentContainer>
    </SContainer>
  );
}

const SContainer = styled.div`
  text-align: center;
`

const SH1 = styled.div`
  font-size: 3.56rem;
  line-height: 110%;
  margin: 5rem 0 1.424rem 0;
`

const SContentContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`

const SContent = styled.p`
  margin: 0 0 1rem 0;
  font-size: 15px;
  /* text-align: left; */
`

const SLi = styled.li`
  width: 300px;
  list-style: none;
  text-align: left;
  margin: 0 auto;
`