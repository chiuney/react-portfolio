import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const {children} = props;
  return (
    <SButon>{children}</SButon>
  );
}

const SButon = styled(BaseButton)`
  background: #40514e;
`