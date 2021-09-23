import styled from "styled-components";
import media from "styled-media-query";

export const CarrerCard = (props) => {
  const { step } = props;

  return (
    <>
      {
        step.map((e) => {
          return(
            <>
              <SStartDate>{e.startDate}</SStartDate>
              <Skari>
                <SContainer>
                  <STitle>{e.title}</STitle>
                  <SStartDateInStep>{e.startDate}</SStartDateInStep>
                  <SContent>{e.content}</SContent>
                </SContainer>
              </Skari>
            </>
          );
        })
      }
    </>
  );
}

const Skari = styled.div`
  margin: 0 50px 0 0;
  position: relative;
  display: flex;

  /* 下線 */
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #bea76f;
    position: absolute;
    bottom: 0;
  }

  ${media.greaterThan("large")`
    /* コンテナの位置 */
    :nth-of-type(1n) {
      width: 45%;
      margin: 24px auto 0 0;
    }
    :nth-of-type(2n) {
      margin: 24px 0 0 auto;
    }
    /* 下線 */
    :nth-of-type(1n)::after {
      width: 135%;
      right: -195px;
    }
    :nth-of-type(2n)::after {
      right: auto;
      left: -195px;
    }
  `}
`

const SContainer = styled.div`
  width: 100%;
  color: #fff;
  padding: 18px 0 18px 12px;
  margin: 24px 0 0 32px;
  position: relative;

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    max-width: 500px;
    margin: 0;
  `}
`

const STitle = styled.h3`
  font-family: 'Noto Serif',serif;
  font-size: 17px;
  letter-spacing: .08em;
`

const SStartDate = styled.p`
  color: #fff;
  display: none;
  position: absolute;
  margin: 58px 0 0 0;
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    display: initial;
    :nth-of-type(1n){
      left: 55%;
    }
    :nth-of-type(1){
    }
    :nth-of-type(2n){
      left: 40%;
    }
    ::after {
      content: none !important;
    }
  `}
`
const SStartDateInStep = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    display: none;
  `}
`
const SContent = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
`

// ${media.lessThan("medium")`
// /* screen width is less than 768px (medium) */
// `}

// ${media.between("medium", "large")`
// /* screen width is between 768px (medium) and 1170px (large) */
// `}

// ${media.greaterThan("large")`
// /* screen width is greater than 1170px (large) */
// `}