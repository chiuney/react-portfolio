import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export const PickUpInSP = (props) => {
  const { notes } = props;

  return (
    <SAccordion>
    {
      React.Children.toArray(notes.map((e) => (
        <AccordionItem>
          <AccordionItemHeading>
            <SAccordionItemButton>
              {e.title}
            </SAccordionItemButton>
          </AccordionItemHeading>
          <SAccordionItemPanel>
            {e.content}
          </SAccordionItemPanel>
        </AccordionItem>
      )))
    }
  </SAccordion>
  );
}

const SAccordionItemButton = styled(AccordionItemButton)`
  height: auto;
  width: 70%;
  margin: 10px auto;
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
const SAccordionItemPanel = styled(AccordionItemPanel)`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  text-align: center;
  margin: 0 auto;
  width: 70%;
`

const SAccordion = styled(Accordion)`
  ${media.greaterThan("small")`
    display: none;
  `}
`
