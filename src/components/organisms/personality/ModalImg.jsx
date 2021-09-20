import styled from "styled-components";

export const ModalImage = (props ) => {
  const { showImg , setShowImg , words } = props;
    if(showImg){
      return(
        <SModalBackground>
          <SModalContainer>
            <SImg src={words} alt="101ワード" onClick={() => setShowImg(false)}/>
          </SModalContainer>
        </SModalBackground>
      );
    } else {
      return null;
    }
}

// モーダル
const SModalBackground = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

const SModalContainer = styled.div`
  z-index: 2;
  width: 90%;
  height: auto;
  padding: 1em;
  background: #fff;
`

const SImg = styled.img`
  width: 100%;
  height: 100%;
`