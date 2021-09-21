import styled from "styled-components";
import { SkilCards } from "../organisms/skill/SkillCards";

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
        <SContent>埼玉県出身のWebエンジニア。早稲田大学を卒業後、ホテルの運営会社で現場での接客業務やレベニューマネジメント業務に携わりました。退職を機に独学でプログラミングの勉強を開始し、2021年3月にIT業界へ転職。フロントエンドエンジニアとして、既存システムの改修や機能拡張、新規開発に携わっています。業務ではHTML, CSS, SCSS, JavaScript, jQuery(, PHP)を使用しています。</SContent>
        <ul>
          <SLink>- Github:  <SA href='https://github.com/chiuney'>https://github.com/chiuney</SA></SLink>
          <SLink>- Blog:    <SA href='https://qiita.com/chiuney'>https://qiita.com/chiuney</SA></SLink>
          <SLink>- Twitter: <SA href='https://twitter.com/chiuney6_'>https://twitter.com/chiuney6_</SA></SLink>
        </ul>
      </SContentContainer>
      <SkilCards skills={skills}></SkilCards>
    </>
  );
}

const SContentContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`
const SContent = styled.p`
  margin: 0 auto 2rem;
  font-size: 16px;
  color: #fff;
  /* text-align: left; */
  font-family: "Harmonia Sans",sans-serif;
  font-weight: 400;
  font-style: normal;
`
const SLink = styled.li`
  width: 300px;
  list-style: none;
  text-align: left;
  margin: 0 auto;
  color: #bea76f;
`
const SA = styled.a`
  color: #bea76f;
`