import styled from "styled-components";

export const ModalImage = (props) => {
  const { showImg , setShowImg , mindMap } = props;
    if(showImg){
      return(
        <SModalBackground onClick={() => setShowImg(false)}>
          <SModalContainer>
            <SImg src={mindMap} alt="101ワード" onClick={() => setShowImg(false)}/>
          </SModalContainer>
        </SModalBackground>
      );
    } else {
      return null;
    }
}

// モーダル
const SModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

const SModalContainer = styled.div`
  z-index: 99999;
  width: 80%;
  max-width: 800px;
  height: auto;
  max-height: 800px;
  padding: 1em;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SImg = styled.img`
  width: 80%;
  height: 80%;
`