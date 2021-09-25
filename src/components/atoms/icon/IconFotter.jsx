import styled from 'styled-components';
import media from "styled-media-query";
import { SA, SLi, SUl } from './IconCss';

export const IconFotter = () => {
  return (
    <>
      <SIcons>
        <SIconLink><a href='https://twitter.com/chiuney6_'target='_blank' rel="noreferrer"><i className="fab fa-twitter white fa-lg"></i></a></SIconLink>
        <SIconLink><a href='https://github.com/chiuney'target='_blank' rel="noreferrer"><i className="fab fa-github white fa-lg"></i></a></SIconLink>
        <SQiita href='https://qiita.com/chiuney'target='_blank' rel="noreferrer">
        </SQiita>
      </SIcons>
    </>
  );
}

const SQiita = styled(SA)`
  background: #fff;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin: 0 5px;
  `}
`
const SIcons = styled(SUl)`
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin: 10px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
const SIconLink = styled(SLi)`
  margin: 0 5px;
`