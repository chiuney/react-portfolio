import React, { useState } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ModalImage } from "../organisms/personality/ModalImg";
import mindMap from './img/101.png'
import { PickUpInSP } from '../organisms/personality/PickUpInSP';
import { PickUpInPC } from '../organisms/personality/PickUpInPC';

// 「人物」「好き」「苦手」「考え」「経験」「その他」
const notes = [{
  // 「人物」
  id:'1',
  title:'杉原千畝',
  content:'名前の由来。杉原千畝のような人になって欲しいという思いから父が名付けた。僕は杉原千畝のように強くはないし、もし同じ状況に置かれたら「当然のこと」をできるかはわからない。できないかもしれない。けど、杉原千畝のように、周りの状況に左右されず、自分が正しいと思える道を進んでいきたい。',
  },{
    // 「好き」
    id:'2',
    title:'青春18切符',
    content:'貧乏旅行に欠かせない旅のお供。何度もお世話になった。例えば始発で関西方面に移動すると、18切符を利用する人は品川から名古屋辺りまで同じルートなので、妙に親近感が湧いて仲良くなったりして楽しい。旅先のその時限りの出会いは今まで関わりのない人と関われて、自分の知らない世界の扉を開けるようで楽しい。鉄道旅は、車のように移動そのものの自由はないけど、移動中の自由があるのが醍醐味。運転していると景色を楽しむ余裕はないし、駅弁を食べながらゆっくりするなんてこともできないので、それぞれに良さがある。',
  },{
    // 「好き」
    id:'3',
    title:'カビの匂い',
    content:'古本屋の独特の匂いが本当に好き。匂いを肴にお酒が飲めるくらいには好き。本をパラパラめくるとふわっと漂う、なんとも形容し難い香ばしい香り。大学図書館がかなり充実していたのもあって通い詰めるまでは至らなかったけれど、行くたびに長居してしまう。主にはインク、紙や装丁に入っている化合物が主な臭いの原因らしい。今とは製法が違うので昔の本だけ香り、今の本だと香らないのだとか。ただそれとは別に、湿気によってカビていることもあるようで。原因がカビだろうとそうでなかろうと好きな匂いには変わりないので問題はないのだけれど。知らなくて良いこともある。でも嗅ぎたい。',
  },{
    // 「苦手」
    id:'4',
    title:'人前で話す',
    content:'小さい頃から苦手。面接・面談やゼミでの発表等々、オフィシャルな場面で話す行為がとにかく苦手。発表中に頭の中が真っ白になるなんて日常茶飯事だし、アドリブできるほどの瞬発力はないのでプレゼンはいつも原稿持参の棒読みだった。大学まで逃げ続けてきたけど、流石に直さねばと決意し、現場研修としてフロント業務を長く取っている前職に入社した。色々意識しながら仕事をしていたおかげで数ヶ月した頃から余裕が出てきた。辛抱強く教育してくれた前職の皆さんには本当に感謝している。例えるなら「甘口カレーすら辛くて食べられなかったけど、甘口カレーは美味しく食べれるようにはなったし、中辛も食べられないことはない」くらいには成長できた。まだまだだけど。これからも頑張りたい。',
  },{
    // 「考え」
    id:'5',
    title:'解像度',
    content:'勉強する中で理解度が上がることを喩えて「解像度が上がる」と言っている。それまで自分に全く関係のなかった分野を少しずつ学んで理解が深まると、その世界の輪郭が徐々に鮮明になる。眼鏡を外している時のようにぼやけた世界だったのに、だんだんと解像度が上がって見やすくなる。霧が晴れていくようなイメージ。知れば知るほど解像度が上がって世界が広がっていくから、勉強はやめられないなと思う。',
  },{
    // 「考え」
    id:'6',
    title:'ひとつでは多すぎる',
    content:'常に複数のことに取り組んでいる。一つだけに集中しすぎると周りが見えなくなりがちだ。複数に取り組んでいれば、一つが煮詰まっても他で気分転換することができる。ただ一つに集中することも大事なので、集中する必要がある場合は他のものを脇に置いておく。すると「もし煮詰まっても他に移ればいい」と考えることができて気分が楽になる。見つめる鍋は煮立たない。',
  },{
    // 「経験」
    id:'7',
    title:'編集アシスタント',
    content:'大学生の時に編集社で社員さんと二人三脚で乗り物図鑑を制作した。企画段階から掲載する乗り物の選定から写真の収集、解説文の草案、コラム内容の選定と執筆、構成まで関わらせていただいた。幼い頃から図鑑が好きだったので携わることができて本当に楽しかったし、仕事の進め方等々いろいろ学ばせていただいた。大手出版社の有名図鑑シリーズだったので出版直後は書店に平積みされていて、達成感が凄まじかった。けれど、出版物の宿命とは言え、出版物は制作したら終わりでその後に改善できないし、購入者の顔が見れないのが残念だった。「共感」を大事にしている身としては、その点少し物足りない感じがした。利用者の顔が見れる仕事がしたいと思うようになったきっかけ。直接でなくとも、何らかの形で反応が見れたら嬉しい。',
  },{
    //  「その他」
    id:'8',
    title:'位置エネルギー',
    content:'自分と同じような背景を持った人と出かけると同じものに興味があるので楽しい。当たり前。けれど、全然違うことに興味がある人と一緒にいるとそれはそれで楽しい。山道を歩っていると山肌に見える地層に興奮して解説してくれたり、高いところに登ったらこっちは景色が綺麗で感動しているのにその人は位置エネルギーを感じて浸っていたり。自分とは違う世界で生きてきた人と関わるのはそれだけで楽しい。',
  }
]

export const Personality = React.memo(() => {
  const [showImg, setShowImg] = useState(false);

  return (
    <>
      <SContainer>
        <SHeader>
          <STitleContainer>
            <STitle>presonality</STitle>
            <SContent>自己分析の一環として「自分を構成する101個のワード」を考えました。</SContent>
            <SButtonContainer>
              <SButton src={mindMap} alt="101ワード" onClick={() => setShowImg(true)} >マインドマップ</SButton>
              <SButton><SA href='https://note.com/sakikura/n/n652068a6e9bd' target='_blank' rel="noreferrer">note <i className="fas fa-external-link-alt"></i></SA></SButton>
            </SButtonContainer>
          </STitleContainer>
        </SHeader>
        <ModalImage showImg={showImg} setShowImg={setShowImg} mindMap={mindMap} ></ModalImage>
        <SPickUpContainer>
          <SNoteTitle>Pick up</SNoteTitle>
          {/* スマホ画面 */}
          <PickUpInSP notes={notes}></PickUpInSP>
          {/* PC、タブレット画面 */}
          <PickUpInPC notes={notes}></PickUpInPC>
        </SPickUpContainer>
      </SContainer>
    </>
  );
})


const SNoteTitle = styled.h3`
  font-family: 'Noto Serif',serif;
  text-align: left;
  font-size: 16px;
  letter-spacing: .08em;
  margin: 20px 0 20px 60px;
`
const SHeader = styled.div`
  height: 100%;
  height: 760px;
  background-image: url('${window.location.origin}/img/background-italia.png');
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const STitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const SContainer = styled.div`
  text-align: center;
  margin: 0 0 60px 0;
`
const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  font-size: 24px;
  letter-spacing: .08em;
  width: 100%;
  text-align: left;
  ${media.lessThan("medium")`
    text-align: center;
  `}
`
const SPickUpContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  ${media.lessThan("small")`
    text-align: center;
    flex-direction: column;
  `}
`
const SContent = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  max-width: 500px;
  width: 100%;
  margin: 0 0 50px 0;
  text-align: left;
  ${media.lessThan("medium")`
    width: 90%;
    text-align: center;
    flex-direction: column;
  `}
`
const SButtonContainer = styled.div`
  display: flex;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
const SButton = styled.div`
  display: block;
  margin: 0 30px 20px;
  width: fit-content;
  width: 80px;
  padding: 14px 28px;
  background: transparent;
  font-size: 11px;
  font-family: "Harmonia Sans",sans-serif;
  font-weight: 400;
  border: 1px solid #fff;
  box-shadow: none;
  cursor: pointer;
`
const SA = styled.a`
  color: #fff;
  text-decoration: none;
`