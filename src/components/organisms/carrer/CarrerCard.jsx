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
                <SSpan>{/* ◯ */}</SSpan>
                <SContainer>
                  <STitleContainer>
                    <h3>{e.title}</h3>
                    <SStartDateInStep>{e.startDate}</SStartDateInStep>
                  </STitleContainer>
                  <p>{e.content}</p>
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
  position: relative;
  display: flex;

  /* ◯ */
  ::before {
    content: "";
    width: 30px;
    height: 30px;
    margin: 24px 0 0 0;
    border: solid 3px #11999e;
    border-radius: 50%;
    background: #e4f9f5;
    /* background: #000; */
    position: absolute;
    left: -18px;
    /* z-index: 9999; */
  }
  /* 吹き出し */
  ::after {
    content: "";
    position: absolute;
    top: 34px;
    left: 20px;
    border: 8px solid transparent;
    border-right: 8px solid #fff;
  }

  ${media.greaterThan("large")`
    :nth-of-type(1n) {
      width: 45%;
      margin: 24px auto 0 0;
    }
    :nth-of-type(2n) {
      margin: 24px 0 0 auto;
    }
    /* ◯ */
    :nth-of-type(1n)::before {
      left: auto;
      right: -76px;
    }
    :nth-of-type(2n)::before {
      left: -77px;
    }

    /* 吹き出し */
    ::after {
      content: "";
      position: absolute;
      top: 35px;
    }
    :nth-of-type(1n)::after {
      left: auto;
      right: -12px;
      border: 8px solid transparent;
      border-left: 8px solid #fff;
    }
    :nth-of-type(2n)::after {
      right: auto;
      left: -14px;
      border: 8px solid transparent;
      border-right: 8px solid #fff;
    }
  `}
`

const SSpan = styled.div`
`

const SContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 18px 12px;
  margin: 24px 16px 0 32px;
  border-radius: 4px;
  box-shadow: 1px 2px 8px 0 rgba(61, 63, 69, 0.25);
  /* display: flex; */
  position: relative;

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    max-width: 500px;
    margin: 0;
  `}
`

const STitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const SStartDate = styled.p`
  display: none;
  position: absolute;
  margin: 58px 0 0 0;

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    display: initial;
    :nth-of-type(1n){
      left: 55%;
    }
    :nth-of-type(1){
      margin: 32px 0 0 0;
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
  margin: 0 0 0 40px;

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    display: none;
  `}
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