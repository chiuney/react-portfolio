import styled from 'styled-components';
import { SkilCards } from '../organisms/skill/SkillCards';

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

export const Home = () => {
  return (
    <>
    <SContainer>
      <SH1>Chiuney's Portfolio</SH1>
      <SContentContainer>
        <SContent>埼玉県出身のWebエンジニア。早稲田大学を卒業後、ホテルの運営会社で現場での接客業務やレベニューマネジメント業務に携わりました。退職を機に独学でプログラミングの勉強を開始し、2021年3月にIT業界へ転職。フロントエンドエンジニアとして、既存システムの改修や機能拡張、新規開発に携わっています。業務ではHTML, CSS, SCSS, JavaScript, jQuery(, PHP)を使用しています。</SContent>
        <ul>
          <SLink>- Github: <a href='https://github.com/chiuney'>https://github.com/chiuney</a></SLink>
          <SLink>- Blog: <a href='https://qiita.com/chiuney'>https://qiita.com/chiuney</a></SLink>
          <SLink>- Twitter: <a href='https://twitter.com/chiuney6_'>https://twitter.com/chiuney6_</a></SLink>
        </ul>
      </SContentContainer>
      <SkilCards skills={skills}></SkilCards>
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
  width: 300px;
  list-style: none;
  text-align: left;
  margin: 0 auto;
`