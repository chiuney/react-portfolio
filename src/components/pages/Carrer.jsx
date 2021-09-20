import styled from "styled-components";
import media from "styled-media-query";
import { CarrerCard } from "../organisms/carrer/CarrerCard";

const step = [{
    title: '独学開始',
    startDate: '2020/9',
    content:`プログラミングの勉強を始めました。ProgateでHTML, CSS, Ruby, JavaSctipyの基礎のきを学びました。`,
  },
  {
    title: 'Ruby on Railsの勉強開始',
    startDate: '2020/10',
    content:`Railsチュートリアルを活用してRuby on Railsを本格的に勉強し始めました。`,
  },
  {
    title: 'JavaScriptの勉強開始',
    startDate: '2021/12',
    content:`動きのある画面を作ってみたくてJavaScriptの勉強をし始めました。`,
  },
  {
    title: '101ワードの作成',
    startDate: '2021/1',
    content:`自己分析の一環として「自分を構成する101のワード」を作成し始めました。`,
  },
  {
    title: '都内のIT企業で勤務開始',
    startDate: '2021/3',
    content:`フロントエンドエンジニアとして働き始めました。`,
  },
  {
    title: 'jQueryの勉強開始',
    startDate: '2021/4',
    content:`仕事に必要だったため、jQueryの勉強を始めました。`,
  },
  {
    title: 'NEXT.jsの勉強開始',
    startDate: '2021/6',
    content:`SPAな技術に触れてみたくて、NEXT.jsの勉強を始めました。`,
  },
  {
    title: 'React.jsの勉強開始',
    startDate: '2021/9',
    content:`React.jsの勉強を開始しました。`,
  },
]

export const Carrer = () => {
  return (
    <>
      <h1>Carrer</h1>
      <SContainer>
        <CarrerCard step={step}></CarrerCard>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  max-width: 1170px;
  padding: 0 0 0 32px;
  margin: 64px 0;
  position: relative;
  ::before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 105%;
    background: #11999e;
    position: absolute;
    left: 30px;
  }

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    margin: 64px auto;
    padding: 0 32px;
    ::before {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  `}
`