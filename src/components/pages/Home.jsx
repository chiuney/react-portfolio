import styled from 'styled-components';

export const Home = () => {
  return (
    <>
    <SContainer>
      <SH1>HOME</SH1>
    </SContainer>
    </>
  );
}

const SContainer = styled.div`
  text-align: center;
`
const SH1 = styled.h1`
  color: red;
`