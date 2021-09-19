import styled from "styled-components";

export const CarrerCard = (props) => {
  const { step } = props;
  return (
    <>
      {
        step.map((e,i) => {
          return(
            <SContainer>
              <SH3>{step[i].title}</SH3>
              <p>{step[i].span.start} ~ {step[i].span.end}</p>
              <div>
                <h5>{step[i].contents[0].title}</h5>
                <p>{step[i].contents[0].content}</p>
              </div>
              <div>
              <h5>{step[i].contents[1].title}</h5>
                <p>{step[i].contents[1].content}</p>
              </div>
            </SContainer>
          );
        })
      }
    </>
  );
}

const SContainer = styled.div`
  width: fit-content;
  background: #fff;
  padding: 18px 12px;
  border-radius: 4px;
  box-shadow: 1px 2px 8px 0 rgba(61, 63, 69, 0.25);
  border: solid 1px #e3e5e8;
`
const SH3 = styled.h3`
  margin: 0;
`