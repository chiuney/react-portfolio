import styled from "styled-components";
import media from "styled-media-query";

export const SkilCards = (props) => {
  const { skills } = props;

  return (
    <>
      <SH3>Skills</SH3>
      <SGridContainer>
        <SGridTitle>技術</SGridTitle>
        <SGridTitle>経験年数[実務経験年数]</SGridTitle>
        <SGridTitle>補足</SGridTitle>
        {
          skills.map((e) => {
            return(
              <>
                <SGridLang>{e.title}</SGridLang>
                <div>{e.span}</div>
                <SGridComment>{e.comment}</SGridComment>
              </>
            );
          })
        }
      </SGridContainer>
    </>
  );
}

const SH3 = styled.h3`
  font-size: 2rem;
  line-height: 110%;
  margin: 2rem 0 1.424rem 0;
`

const SGridContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 1px 2px 8px 0 rgba(61, 63, 69, 0.25);
  border: solid 1px #e3e5e8;
  background: #fff;
  display: grid;
  /* grid-template-rows: 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem; */
  grid-template-columns: 20% 40% 40%;
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width: 50%;
  `}
`
const SGridTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`
const SGridLang = styled.div`
  font-size: 14px;
  font-weight: 600;
  height: 2rem;
`
const SGridComment = styled.div`
  font-size: 13px;
  font-weight: 300;
  display: flex;
  align-items: center;
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