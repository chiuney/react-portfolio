import styled from "styled-components";

export const CarrerCard = (props) => {
  const { step } = props;
  return (
    <>
      {
        step.map((e) => {
          return(
            <SContainer>
              <SSpan>{e.span.start} ~ {e.span.end}</SSpan>
              <SStepContainer>
                <STitleContainer>
                  <SH3>{e.title}</SH3>
                  <SSpan>{e.span.start} ~ {e.span.end}</SSpan>
                </STitleContainer>
                <SContentContainer>
                  {
                    e.contents.map((e) => {
                      return (
                        <div>
                          <h5>{e.title}</h5>
                          <SP>{e.content}</SP>
                        </div>
                      );
                    })
                  }
                </SContentContainer>
              </SStepContainer>
            </SContainer>
          );
        })
      }
    </>
  );
}

const SContainer = styled.div`
  display: flex;
  :nth-child(2n) {
    /* flex-flow: row-reverse; */
  }
  ::before {
    content: '';
    display: inline-block;
    background: #e4f9f5;
    position: absolute;
    /* top: -2px; */
    left: -5px;


    width: 3rem;
    height: 3rem;
    border: solid 2px #11999e;
    border-radius: 50%;
  }
`

const SStepContainer = styled.div`
  width: fit-content;
  background: #fff;
  padding: 18px 12px;
  border-radius: 4px;
  box-shadow: 1px 2px 8px 0 rgba(61, 63, 69, 0.25);
  border: solid 1px #070808;
  /* reverseする時用 */
  /* flex: 1; */
`

const STitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const SH3 = styled.h3`

`

const SSpan = styled.p`
  margin: 0 0 0 40px;
  /* position: relative; */
  /* reverseする時用 */
  /* flex: 1; */
`

const SContentContainer = styled.div`
  margin: 24px 0 0 0;
`

const SP = styled.p`
  word-wrap: break-word;
`