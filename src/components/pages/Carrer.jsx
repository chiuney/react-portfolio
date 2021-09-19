import styled from "styled-components";
import { CarrerCard } from "../organisms/carrer/CarrerCard";

const step = [{
  title: '株式会社アクティバリューズ',
  span: {start:'2021/3', end:'現在'},
  contents: [{
    title:'エンジニア',
    content:`HTML, CSS, JavaScript, jQuery, PHP\nAIチャットボットtalkappi => 改修<br>talkappi SURVEY(アンケートシステム) => 新規開発<br>talkappi INQUIRY(問い合わせシステム) => 新規開発中`,
  },
  {
    title:'カスタマーサクセス',
    content:'新規導入案件を数件担当中',
  }
  ]
},
{
  title: '独学期間',
  span: {start:'2020/9', end:'2021/3'},
  contents: [{
    title:'プログラミング',
    content:'HTML, CSS, Ruby, Ruby on Rails, JavaScript. Progate, Dotinstall => Railsチュートリアル => ポートフォリオ作成',
  },
  {
    title:'転職活動',
    // link
    content:'『自分を構成する101ワード』を作成',
  }
  ]
  },
{
  title: '株式会社フェリーチェ',
  span: {start:'2018/4', end:'2020/8'},
  contents: [{
    title:'フロントデスク業務',
    content:'チェックイン、チェックアウト、予約受付、観光案内、口コミ返信など、フロント業務全般に携わる。店舗intstagramの運用2019年6月~2019年12月までの半年でフォロワー数30倍達成(31 => 986)',
  },
  {
    title:'レベニューマネジメント業務*',
    content:'*各店舗の需要予測と利益最大化を目的とした施策。価格設定やプラン作成、キャンペーンの開催など。展開しているホテル4店舗のレベニューマネジメント業務を担当- プラン作成、日々の価格調整、広告の掲載 など',
  }
  ]
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
  position: relative;
  ::before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 100%;
    background: #11999e;
    position: absolute;
    /* top: -2px; */
    left: 20px;
  }
`