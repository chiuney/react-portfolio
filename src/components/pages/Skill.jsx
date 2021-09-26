import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import backgroundHeader from './img/background-header-about.jpg'

const skills = [
  {
    title: 'HTML5',
    start: '2020/9',
    business: true,
    comment: '',
  },
  {
    title: 'CSS3',
    start: '2020/9',
    business: true,
    comment: '正解がなく、奥が深く、一番難しいかもしれないと感じています。もっと仲良くなりたいです。',
  },
  {
    title: 'SCSS',
    start: '2020/12',
    business: true,
    comment: '初めて簡単なアプリを作成する際に、CSSの管理が辛くなったので学習しました。使いやすくて気に入っています。',
  },
  {
    title: 'BEM',
    start: '2020/12',
    business: false,
    comment: 'SCSSと同じタイミングで、CSSの効率的な管理の為に学習を開始しました。中〜大規模開発やチーム開発で威力を発揮すると思うので、また使いたいです。',
  },
  {
    title: 'Ruby',
    start: '2020/9',
    business: false,
    comment: '学習当初はバックエンドに興味があったため勉強していました。',
  },
  {
    title: 'Ruby on Rails',
    start: '2020/9',
    business: false,
    comment: '主にRailsチュートリアルで学習し、自作アプリを作成しました。',
  },
  {
    title: 'JavaScript',
    start: '2020/11',
    business: true,
    comment: '自作アプリを作成する際に、簡単なハンバーガーメニューやGoogleMapの埋め込みをしたかったため学習を開始しました。結果的にバッグエンドよりハマり、フロントエンドエンジニアとして転職することになりました。',
  },
  {
    title: 'jQuery',
    start: '2021/3',
    business: true,
    comment: '業務で必要だったため学習を開始しました。独学の時点では生のJavaScriptにしか触れていなかった為、使いやすさに感動しました。',
  },
  {
    title: 'Next.js',
    start: '2021/6',
    business: false,
    comment: 'SPAを体験してみたくて学習しました。公式チュートリアルと簡単なアプリを作成しました。',
  },
  {
    title: 'React.js',
    start: '2021/9',
    business: false,
    comment: '現在メインで学習中です。このサイトはReact.jsのアウトプットとして作成しています。',
  },
]

export const Skill = () => {
  return (
    <>
      <SContentContainer>
        <SHeader>
          <STitleContainer>
            <STitle>Skill</STitle>
            <SContent>[ HTML5, CSS3, SCSS, BEM, JavaScript, jQuery, Next.js, React.js, Ruby, Ruby on Rails ]</SContent>
          </STitleContainer>
        </SHeader>
        <SMainContainer>
          <SDetailTitle>Details</SDetailTitle>
            <SSkills>
              {
              React.Children.toArray(skills.map((e,i) => {
                return(
                  <>
                  <SSkill>
                    <SSkillTitle>{e.title}</SSkillTitle>
                    <SSKillContents>
                      <p>学習開始日 : {e.start}</p>
                      {
                      e.business ? (<p>実務経験 : あり</p>):(<></>)
                      }
                      <SCOmments>{e.comment}</SCOmments>
                    </SSKillContents>
                  </SSkill>
                  </>
                );
              }))
            }
            </SSkills>
        </SMainContainer>
      </SContentContainer>
    </>
  );
}
const SMainContainer = styled.div`
  background: linear-gradient(#000, #201c09);
  padding: 0 60px;
  ${media.lessThan("small")`
    padding: 0 30px;
  `}
`
const SSkills = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  max-width: 100%;
  cursor: pointer;
`
const SSkill = styled.li`
  display: flex;
  height: auto;
  padding: 40px 0;
  border-bottom: 1px solid #bea76f;
  ${media.lessThan("small")`
      display: block;
  `}
`
const SSkillTitle = styled.h4`
  font-family: 'Noto Serif',serif;
  font-size: 17px;
  letter-spacing: .08em;
  width: 230px;
`
const SSKillContents = styled.div`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  width: 80%;
  ${media.lessThan("small")`
      width: 100%;
  `}
`
const SCOmments = styled.p`
  width: 100%;
`
const SDetailTitle = styled.h3`
  font-family: 'Noto Serif',serif;
  text-align: left;
  font-size: 24px;
  letter-spacing: .08em;
  padding: 40px 0 20px 0;
`

const SContentContainer = styled.div`
  width: 100%;
  height: auto;
`
const SHeader = styled.div`
  height: 300px;
  background-image: url(${backgroundHeader});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 0 60px;
  display: flex;
  position: relative;
  ${media.lessThan("small")`
    display: block;
    padding: 0 30px;
  `}
`
const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  font-size: 24px;
  letter-spacing: .08em;
  width: 120px;
  color: #fff;
`
const SContent = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  min-width: 300px;
  width: fit-content;
  ${media.lessThan("small")`
    min-width: auto;
  `}
`