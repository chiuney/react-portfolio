import styled from 'styled-components';
import { SA, SLi, SUl } from './IconCss';

export const IconHeader = () => {
  return (
    <>
      <SIcons>
        <SIconLink><a href='https://twitter.com/chiuney6_'target='_blank' rel="noreferrer"><i className="fab fa-twitter gold fa-lg"></i></a></SIconLink>
        <SIconLink><a href='https://github.com/chiuney'target='_blank' rel="noreferrer"><i className="fab fa-github gold fa-lg"></i></a></SIconLink>
        {/* <SIconLink> */}
          <SQiita href='https://qiita.com/chiuney'target='_blank' rel="noreferrer">
          </SQiita>
        {/* </SIconLink> */}
      </SIcons>
    </>
  );
}

const SQiita = styled(SA)`
  background: #bea76f;
`
const SIcons = styled(SUl)`
`
const SIconLink = styled(SLi)`
`