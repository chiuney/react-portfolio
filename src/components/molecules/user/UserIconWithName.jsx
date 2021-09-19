import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { name, image } = props;
  return (
    <SContainer>
      <SImg src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
}

const SContainer = styled.div`
  text-align: center;
`
const SImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #40415e;
`

