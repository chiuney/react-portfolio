import { Header } from "../atoms/layouts/Header"

export const HeaderOnly = (props) => {
  const {children} = props;
  return (
    <>
      <Header />
       {children}
    </>
  );
}