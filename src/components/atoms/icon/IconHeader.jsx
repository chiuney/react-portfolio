import styled from 'styled-components';
import media from "styled-media-query";
import { SA, SLi, SUl } from './IconCss';

export const IconHeader = () => {
  return (
    <>
      <SIcons>
        <SIconLink><a href='https://twitter.com/chiuney6_'target='_blank' rel="noreferrer"><i className="fab fa-twitter gold fa-lg"></i></a></SIconLink>
        <SIconLink><a href='https://github.com/chiuney'target='_blank' rel="noreferrer"><i className="fab fa-github gold fa-lg"></i></a></SIconLink>
        <SQiita href='https://qiita.com/chiuney'target='_blank' rel="noreferrer">
        </SQiita>
      </SIcons>
    </>
  );
}

const SQiita = styled(SA)`
  background: #bea76f;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin: 0 0 0 0px;
  `}
`
const SIcons = styled(SUl)`
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */

  `}
`
const SIconLink = styled(SLi)`
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin: 0 0 0 5px;
  `}
`
