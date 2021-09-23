import styled from "styled-components";
import { SkilCards } from "../organisms/skill/SkillCards";
import backgroundHeader from './img/background-header-about.jpg'

const skills = [
  {
    title: 'HTML5',
    span: '1年[半年]',
    comment: '',
  },
  {
    title: 'CSS',
    span: '1年[半年]',
    comment: '',
  },
  {
    title: 'SCSS',
    span: '1年[半年]',
    comment: '',
  },
  {
    title: 'Ruby',
    span: '半年 [ / ]',
    comment: '',
  },
  {
    title: 'Ruby on Rails',
    span: '半年 [ / ]',
    comment: 'Railsチュートリアルと自作アプリの作成',
  },
  {
    title: 'JavaScript',
    span: '1年[半年]',
    comment: '',
  },
  {
    title: 'jQuery',
    span: '半年 [半年]',
    comment: '',
  },
  {
    title: 'React.js',
    span: '数ヶ月 [ / ]',
    comment: '現在メインで学習中。このサイトはReact.jsのアウトプットとして作成しています。',
  },
  {
    title: 'Next.js',
    span: '数ヶ月 [ / ]',
    comment: 'チュートリアルと初歩的なアプリの開発',
  },
]

export const About = () => {
  return (
    <>
      <SContentContainer>
        <SHeader>
          <STitleContainer>
            <STitle>About me</STitle>
            <div style={{}}>
              <SContent>埼玉県出身のWebエンジニア。早稲田大学を卒業後、ホテルの運営会社で現場での接客業務やレベニューマネジメント*業務に携わる。退職を機に独学でプログラミングの勉強を開始し、2021年3月にIT業界へ転職。フロントエンドエンジニアとして既存システムの改修や機能拡張、新規開発に携わっています。</SContent>
              <SComment>*各店舗の需要予測と利益の最大化を目的とした施策</SComment>
            </div>
          </STitleContainer>
        </SHeader>
        <SMainContainer>
          <ul>
            <SLink>- Github:  <SA href='https://github.com/chiuney'>https://github.com/chiuney</SA></SLink>
            <SLink>- Blog:    <SA href='https://qiita.com/chiuney'>https://qiita.com/chiuney</SA></SLink>
            <SLink>- Twitter: <SA href='https://twitter.com/chiuney6_'>https://twitter.com/chiuney6_</SA></SLink>
          </ul>
          <SkilCards skills={skills}></SkilCards>

        </SMainContainer>
      </SContentContainer>
    </>
  );
}
const SMainContainer = styled.div`
  background: linear-gradient(#000, #201c09);
`


// 参考書とか載せてもいいかも
// contactpageほしみ
const SContentContainer = styled.div`
  width: 100%;
  height: auto;
`
const SHeader = styled.div`
  height: 100%;
  height: 760px;
  background-image: url(${backgroundHeader});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  ::before {
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: ' ';
  }
`
const STitleContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`
const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  font-size: 24px;
  letter-spacing: .08em;
  width: 230px;
  color: #fff;
`
const SContent = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  width: 500px;
`
const SComment = styled.p`
  font-size: 10px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  width: 500px;
`

const SLink = styled.li`
  width: 300px;
  list-style: none;
  text-align: left;
  margin: 0 auto;
  color: #fff;
`
const SA = styled.a`
  color: #fff;
`