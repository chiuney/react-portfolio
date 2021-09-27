import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";

export const SkilCards = (props) => {
  const { skills } = props;

  return (
    <SContainer>
      {
      React.Children.toArray(skills.map((e,i) => {
        return(
          <>
          <SSkill>
            <STitle>{e.title}</STitle>
            <SContents>
              <p>学習開始日 : {e.start}</p>
              {
              e.business ? (<p>実務経験 : あり</p>):(<></>)
              }
              <SComments>{e.comment}</SComments>
            </SContents>
          </SSkill>
          </>
        );
      }))
    }
    </SContainer>
  );
}

const SContainer = styled.ul`
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
const STitle = styled.h4`
  font-family: 'Noto Serif',serif;
  font-size: 17px;
  letter-spacing: .08em;
  width: 230px;
`
const SContents = styled.div`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  width: 80%;
  ${media.lessThan("small")`
    width: 100%;
  `}
`
const SComments = styled.p`
  width: 100%;
`