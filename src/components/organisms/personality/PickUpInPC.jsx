import React, { useState } from 'react';
import styled from "styled-components";
import media from "styled-media-query";

export const PickUpInPC = (props) => {
  const { notes } = props;
  const [showContent, setShowContent] = useState(0);

  const onClickShowList = (i) => {
    setShowContent(i);
  }


  return (
    <SContainer>
      <SNotes>
        {
        React.Children.toArray(notes.map((e,i) => {
          return(
            <>
              <SNote onClick={() => onClickShowList(i)}>
              {e.title}
              </SNote>
            </>
          );
        }))
      }
      </SNotes>
      <SNoteContent>{notes[showContent].content}</SNoteContent>
    </SContainer>
  );
}
const SContainer = styled.div`
  display: flex;
`

const SNotes = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;
  width: fit-content;
  cursor: pointer;
  ${media.lessThan("small")`
    display: none;
  `}
`
const SNote = styled.li`
  height: auto;
  width: 180px;
  margin: 10px;
  list-style: none;
  position:relative;

  ::after{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background:#bea76f;
    position: absolute;
    bottom: 0;
  }
`
const SNoteContent = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  text-align: left;
  margin: 0 auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.lessThan("small")`
    display: none;
  `}
`