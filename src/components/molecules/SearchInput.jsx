import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input type="text" placeholder='検索条件を入力'/>
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  align-items: center;
`

const SButtonWrapper = styled.div`
  padding: 0 0 0 8px;
`