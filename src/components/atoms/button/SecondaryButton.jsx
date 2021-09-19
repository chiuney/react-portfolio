import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const {children} = props;
  return (
    <SButon>{children}</SButon>
  );
}

const SButon = styled(BaseButton)`
  background: #11999e;
`